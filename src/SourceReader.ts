/*
 * Source code reader and parser to identify code entities and extract metadata
 */

import {
    APIInfo,
    ClassInfo,
    EnumInfo,
    EnumValueInfo,
    FunctionInfo,
    ParameterInfo,
    PropertyInfo,
    ReturnInfo,
    ScopeModifiers,
    SourceInfo,
    SpecificationStatus,
    TypedefForm,
    TypedefInfo,
} from "./types";

import * as TypeCheck from "./TypeCheck"

// RegExp pattern for recognizing a constraint declaration
const constraintRE = /\<[\w|\d|=|,|"||!|'|\s]+\>/g

/**
 * The primary source parsing object.
 * Maintains its parsing position in the source internally.
 *
 * Call `getApiInfo` to receive a full analysis of the given source.
 *
 */
export class SourceReader {
    private readonly text:string = ''; // text of the source
    private pos:number = 0; // current parse position
    private readonly fileType:string; // type of file we are parsing

    private comments:string[][] = [
        ['//','\n'],
        ['/*', '*/']
    ]

    constructor(srcText, ext) {
        this.text = srcText
        this.fileType = ext == '.js' ? 'javascript' : ext === '.ts' ? 'typescript' : 'unknown'
        this.skipTop()
    }

    /**
     * Skip things line "use strict" at the top.
     */
    skipTop() {
        this.skipWhite();
        let n = this.text.indexOf('"use strict"', this.pos)
        if(n !== -1) n = this.text.indexOf('\n', n)
        if(n !== -1) this.pos = n;
        this.skipWhite();
    }

    // returns the position past skipped white space in a given string
    pastWhite(str:string, startIndex:number = 0) {
        let n = startIndex
        while(str.charCodeAt(n) < 33) n++;
        return n;
    }
    // advance past white space in parsing
    skipWhite() {
        this.pos = this.pastWhite(this.text, this.pos)
    }
    // advances to the next start of white space in parsing
    findWhite(str, startIndex) {
        let n = startIndex
        while(str.charCodeAt(n) > 32) n++;
        return n;
    }
    // reads the next word, stopping at comma or whitespace
    readNextWord(str, startIndex) {
        let b = this.pastWhite(str, startIndex)
        let c = str.indexOf(',',startIndex)
        let e = this.findWhite(str, b)
        if(c !== -1) e = Math.min(c, e)
        return str.substring(b, e)
    }
    // skips past an import statement
    skipImport() {
        let qc = '"'
        let q1 = this.text.indexOf(qc, this.pos)
        if(q1 === -1) {
            qc = "'"
        }
        q1 = this.text.indexOf(qc, this.pos)
        if(q1 == -1) {
            throw ("missing quotes in import statement")
        }
        let q2 = this.text.indexOf(qc, q1+1)
        if(q2 === -1) throw ("missing matching quote in import statement")
        this.pos = q2+1
        while(this.text.charAt(this.pos) === ';') this.pos++
        this.skipWhite()
        while(this.text.charAt(this.pos) === ';') this.pos++
        this.skipWhite()
    }
    // skips past an export statement
    skipExport() {
        if(this.text.indexOf('{', this.pos) !== -1) {
            let {end} = this.findBracketBoundaries(this.pos)
            this.pos = end+1
        } else {
            this.pos = this.text.indexOf('\n', this.pos)
        }
        while(this.text.charAt(this.pos) === ';') this.pos++
        this.skipWhite()
        while(this.text.charAt(this.pos) === ';') this.pos++
        this.skipWhite()
    }
    // skips past a require statement
    skipRequire() {
        let p1 = this.text.indexOf('(', this.pos)
        let p2 = this.text.indexOf(')', p1+1)
        if(p2 === -1) throw ("unclosed parenthesis in require statement")
        let e = this.pos
        while(e < p2) {
            e = this.text.indexOf('\n', e)
        }
        this.pos = e
        while(this.text.charAt(this.pos) === ';') this.pos++
        this.skipWhite()
        while(this.text.charAt(this.pos) === ';') this.pos++
        this.skipWhite()
    }
    // finds the next end of line or start of comment
    nextEnd() {
        let lnEnd = this.text.indexOf('\n', this.pos)
        if(lnEnd === -1) lnEnd = this.text.length;
        let nd = this.text.length -1;
        for (let i=0; i<this.comments.length; i++) {
            const [cs,ce] = this.comments[i]
            let n = this.text.indexOf(cs, this.pos)
            if(n >= this.pos && n < lnEnd) { // comments starting past current line are irrelevant
                n = this.text.indexOf(ce, n)
                if (n < nd) {
                    nd = n + ce.length
                }
            }
        }
        if(nd === -1 || nd === this.text.length -1) {
            nd = lnEnd
        }
        return nd || this.text.length
    }
    // Reads the next line of source, discrening the start and end of the comment block and code declaration.
    readSourceLine() {
        const rt = new SourceInfo()
        // skip shebang line
        if(this.text.substring(this.pos, this.pos+2) === '#!') this.pos = this.text.indexOf('\n', this.pos)
        this.skipWhite()
        while(this.text.charAt(this.pos) === ';') this.pos++
        while(this.text.substring(this.pos,this.pos+6) === 'import') this.skipImport()
        while(this.text.substring(this.pos,this.pos+7) === 'require') this.skipRequire()
        let n = this.nextEnd()
        // let c = this.text.substring(this.pos, n) // this is the comment block above the source
        rt.comStart = this.pos;
        if(this.text.charAt(this.pos) === '/') {
            if(this.text.charAt(this.pos+1) === '/') { // handle possible multiline double-slash comment
                let p = this.pos;
                while(this.text.substring(p, p+2) === '//') {
                    let n = this.text.indexOf('\n', p)
                    if(n === -1) n = this.text.length
                    p = n+1;
                }
                rt.comEnd = p-1;
                n = p
            } else {
                rt.comEnd = n - 2
            }
        } else {
            // not a comment
            // check for a distended body
            if(this.text.charAt(this.pos) == '{') {
                let {start, end} = this.findBracketBoundaries(this.pos)
                if(end !== -1) n = end
            } else {
                // not a distended body
                n = rt.comStart = rt.comEnd = this.pos
            }

        }

        if(rt.comEnd < rt.comStart) rt.comEnd = rt.comStart; // no comment
        if(n < rt.comEnd) n = rt.comEnd+1
        this.pos = n
        this.skipWhite()
        n = this.nextEnd()
        rt.decEnd = n;
        rt.decStart = this.pos;
        if(this.text.substring(rt.decStart, rt.decEnd).trim() === '}') {
            rt.decEnd = this.text.indexOf('\n', this.pos)
            if(rt.decEnd === -1) rt.decEnd = this.text.length;
            this.pos = rt.decEnd
        }
        return rt;
    }
    // Read a type description. Includes support for template types.
    readTypeDef(str, startIndex) {
        let tp = ''
        let ti = str.indexOf('<', startIndex)
        if(ti !== -1) {
            let te = str.indexOf('>', ti)
            if(te !== -1) {
                tp = str.substring(0, te+1).trim()
                return tp
            }
        }
        let type = this.readNextWord(str, startIndex)
        if(type.charAt(type.length-1) === ',') type = type.substring(0,type.length-1)
        let dc = str.indexOf(':')
        if(dc !== -1 || dc > startIndex) type = ''
        let bs = this.pastWhite(str, startIndex)
        if(str.charAt(bs) === '{') {
            let be = str.indexOf('}', bs)
            if(be !== -1) {
                type = str.substring(bs, be+1)
            }
        }
        type = type.replace(/;;/g, ',')
        return type
    }

    /**
     * Determines if the source appears to be a function, and if so returns the function name.
     * Otherwise an empty string ('') is returned.
     * @param inClass true if we are parsing a class
     * @param text
     */
    getFunctionName(inClass:boolean, text:string): string {
        let exported = false
        let async = false
        text = text.trim()
        if(text.substring(0, 6) === 'export') {
            exported = true
            text = text.substring(7).trim()
        }
        if(text.substring(0,5) === 'async') {
            async = true
            text = text.substring(6).trim()
        }
        if(inClass) {
            const opi = text.indexOf('(')
            let name;
            if(opi !== -1) {
                name = text.substring(0, opi).trim()
            }
            return name;
        }
        const keyword = 'function'
        const kwLength = keyword.length;
        // see if we start with the function keyword
        if(text.substring(0, kwLength) === keyword) {
            let n = text.indexOf('(', kwLength+1)
            let gi = text.indexOf('*')
            if(n !== -1) {
                let g = gi !== -1 && gi < n
                let name = exported ? 'public ' : ''
                if(g) name += 'generator '
                if(async) name += 'async '
                name += text.substring(kwLength+1, n).trim()
                return name
            }
        }
        // see if function keyword is on right side of an assignment
        const ap = text.split('=')
        if(ap[1]) {
            let t = ap[1].trim()
            if(t.charAt(0) === '(') { // anonymous
                t = t.substring(1).trim()
            }
            if (
                (t.substring(0, kwLength) === keyword )  // function keyword on right of assignment
                || (ap[2] && ap[2].charAt(0) === '>')   // arrow function notation on right of assignment
                && ap[2].indexOf('class ') === -1       // if we assign to a class, it's not a function (mixin case)
            ) {
                let dp = ap[0].trim().split(/\s+/)
                let ni = dp.length-1
                return dp[ni].trim() // name
            }
        }
        // doesn't look like a function
        return '';
    }

    /**
     * Try to build a valid FunctionInfo entity from the given SourceInfo
     */
    extractMethodInfo(name, si:SourceInfo, longsrc:string = ''):FunctionInfo {
        let fi:FunctionInfo = new FunctionInfo()
        Object.assign(fi, si)

        let modstr = longsrc || name
        modstr = modstr.replace(/\n/g, ' ')
        let p = modstr.split(' ');
        let sm = new ScopeModifiers()
        p.forEach(k => {
            switch(k.trim().toLowerCase()) {
                case 'generator':
                    sm.generator = true
                    break;
                case 'async':
                    sm.async = true;
                    break;
                case 'export':
                case 'public':
                    sm.public = true;
                    break;
                case 'private':
                    sm.private = true;
                    break;
                case 'static':
                    sm.static = true;
                    break;
                case 'var':
                case 'let':
                case 'const':
                case 'function':
                    break;
                default:
                    if(k) name = k
                    break;
            }
        })

        fi.name = name;
        fi.scope = sm;
        // now parse out parameter info from declaration
        // this won't have types (unless typescript), but we can get names and ordinal out of it
        //

        // v3 attempt
        // index past name, get opi
        // bracket match '(' for cpi
        let pn = this.text.indexOf(name, si.decStart) +name.length
        let opi, cpi
        try {
            let {start, end} = this.findBracketBoundaries(pn, '(')
            opi = start
            cpi = end - 1
        } catch(e) {}

        let pdec = this.text.substring(opi+1, cpi)
        let oti = pdec.indexOf('<')
        let ahi = pdec.indexOf('{')
        if(oti === -1) oti = ahi
        if(oti !== -1) {
            // craziness if we have to handle a template
            let cti = pdec.indexOf(ahi === -1 ? '>' : '}', oti)
            let swap = pdec.substring(oti,cti).replace(' ', '')
            swap = swap.replace(',', ';;')
            pdec = pdec.substring(0, oti)+ swap + pdec.substring(cti)
        }

        // parameters
        let parent = '' // part of ad-hoc object handling
        let pdecResume = '' // part of ad-hoc object handling
        while(pdec || pdecResume) {
            if(!pdec) {
                pdec = pdecResume
                pdecResume = ''
                parent = ''
            }
            pdec = pdec.trim()
            let c = pdec.indexOf(':')
            let a = pdec.indexOf('=')
            let s = pdec.indexOf(' ')
            let r = pdec.indexOf('\n')
            let t = Math.min(a, s)
            if(t === -1) t = Math.min(a, s)
            if(t === -1) t = Math.min(t, r)
            if(t === -1) t = r
            if(t < c) c = t
            let type
            let b = 0
            if(c !== -1) {
                type = this.readTypeDef(pdec, c+1)
                b = c+1+type.length
            }
            let d = pdec.indexOf(',', b)
            let m = pdec.indexOf('/', b)
            if(d === -1) d = m
            if (d === -1) d = pdec.length
            let ilc = ''
            let isIlc = false
            let pm = pdec.indexOf('/*')
            if(pm !== -1 && pm < d) {
                let pe = pdec.indexOf('*/', pm)
                isIlc = true
                ilc = pdec.substring(pm+2, pe).trim()
                pdec = pdec.substring(0,pm)+pdec.substring(pe+2)
                d = pdec.indexOf(',')
                if (d === -1) d = pdec.length
                m = -1
            }
            let ntc = pdec.substring(0, d).replace(/ /g, '')
            if(ntc.indexOf('=') !== -1 ) {
                type = ''
                if(ntc.indexOf(':') === -1) {
                    let es = ntc.split('=')
                    let ltype = deriveTypeFromValue((es[1] || '').trim())
                    ntc = es[0].trim() + ':' + ltype + '=' + es[1]
                }
            }
            let nt = ntc.split(':')
            let pi = new ParameterInfo()
            pi.name = parent ? parent+'.'+nt[0].trim() : nt[0].trim()
            if(pi.name.charAt(pi.name.length-1) === '?') {
                pi.name = pi.name.substring(0, pi.name.length-1)
                pi.optional = true
            }
            let td = (type || nt[1] || '').trim().split('=')
            pi.type = this.readTypeDef(td[0].trim(), 0)
            if(td[1]) {
                pi.default = td[1].trim().replace(';', '')
                if(!pi.type) pi.type = deriveTypeFromValue(pi.default)
                pi.optional = true
            }

            let pt = Math.max(m, d)
            if(!isIlc) m = pdec.indexOf('/',pt)
            let x = pdec.indexOf(',', pt)
            if(x === -1) x = pdec.indexOf('\n', pt)
            if (x === -1) x = pdec.length
            else x++
            if (m !== -1) {
                if (pdec.charAt(m + 1) === '/') {
                    let n = pdec.indexOf('\n', m)
                    if (n === -1) n = pdec.length
                    pi.description = pdec.substring(m + 2, n).trim()
                    x = n + 1
                } else if (pdec.charAt(m + 1) === '*') {
                    let n = pdec.indexOf('*/')
                    if (n === -1) n = pdec.length
                    pi.description = pdec.substring(m + 2, n).trim()
                    x = n + 2
                }
            }
            if(ilc) pi.description = ilc
            // constraints >>>
            // parse out constraints here
            let ctext = (pi.description?.replace(/;;/g, ',') || '')
            let constraintDeclaration = ''
            const cm = ctext.match(constraintRE)
            if(cm) {
                for(let m of cm) {
                    let n = ctext.indexOf(m)
                    ctext = ctext.substring(0,n)+ctext.substring(n+m.length)
                    if(constraintDeclaration) constraintDeclaration += ', '
                    constraintDeclaration += m.substring(1, m.length-1)
                }
            }
            pi.description = ctext
            try {
                if(constraintDeclaration) {
                    pi.constraintMap = TypeCheck.parseConstraintsToMap(pi.type, constraintDeclaration)
                }
            } catch (e) {
                console.error(e)
                pi.error = e.message;
                pi.status = SpecificationStatus.BadConstraint
            }
            // <<<

            if(!pi.name) { // this is a continuation of a comment
                const lastPi:ParameterInfo|undefined = fi.params.pop()
                if(lastPi) {
                    lastPi.description += '\n' + pi.description
                    pi = lastPi
                }
            }

            let isAdHoc = false
            if(pi.type.charAt(0) == '{') {
                isAdHoc = true
                pi.type = 'object'
            }
            fi.params.push(pi)
            if(isAdHoc) {
                parent = pi.name
                pdecResume = pdec.substring(x)
                let i = pdec.indexOf('{')
                let e = pdec.indexOf('}', i)
                pdec = pdec.substring(i+1, e).replace(/;;/g, ',')
            } else {
                pdec = pdec.substring(x)
            }
        }
        // typescript can provide return type
        // if(opi2 !== -1) cpi = this.text.indexOf(')', cpi+1)
        let n = this.pastWhite(this.text, cpi)
        if(this.fileType === 'typescript') {
            fi.return = new ReturnInfo();
            if (this.text.charAt(n) === ':') {
                let bs = this.text.indexOf('{', n+1)
                if(bs === -1) bs = this.text.length
                let btwn = this.text.substring(n+1, bs).trim()
                let aht = ''
                if(!btwn) {
                    let ahi = bs
                    let {start, end} = this.findBracketBoundaries(ahi)
                    let ahe = end
                    aht = this.text.substring(ahi, ahe+1)
                    bs = this.text.indexOf('{', ahe+1)
                    if(bs === -1) bs = this.text.length
                }
                let c = this.text.indexOf('/', n+1)
                let e = Math.min(bs, c)
                if(e === -1) e = Math.max(bs, c)
                let rt = this.text.substring(n+1, e)
                fi.return.type = aht || this.readTypeDef(rt, 0)
                n += fi.return.type.length
                let m = this.text.indexOf('/', n+1)
                if(m !== -1 && m < bs) {
                    e = bs
                    if(this.text.charAt(m+1) === '*') e = this.text.indexOf('*/',m)
                    if(e === -1) e = bs
                    fi.return.description = this.text.substring(m+2, e).trim() || ''
                } else {
                    fi.return.description = ''
                }
                // parse out constraints here
                let ctext = fi.return.description
                if(ctext.substring(ctext.length-2) === '*/') ctext = ctext.substring(0, ctext.length-2)
                ctext = ctext.replace(/;;/g, ',')
                let constraintDeclaration = ''
                const cm = ctext.match(constraintRE)
                if(cm) {
                    for(let m of cm) {
                        let n = ctext.indexOf(m)
                        ctext = ctext.substring(0,n)+ctext.substring(n+m.length)
                        if(constraintDeclaration) constraintDeclaration += ', '
                        constraintDeclaration += m.substring(1, m.length-1)
                    }
                }
                fi.return.description = ctext.trim()
                if(fi.return.type.indexOf(';') !== -1) {
                    fi.return.type = fi.return.type.replace(';', '')
                }
                try {
                    if(constraintDeclaration) {
                        fi.return.constraintMap = TypeCheck.parseConstraintsToMap(fi.return.type, constraintDeclaration)
                    }
                } catch (e) {
                    console.error(e)
                    // error = e.message;
                    // status = SpecificationStatus.BadConstraint
                }
            }
            if(!fi.return.description) {
                // last chance for a description: a // comment on the same line
                let eol = this.text.indexOf('\n', n)
                if(eol == -1) eol = this.text.length
                if(!fi.return.type) fi.return.type = 'void'
                let ci = this.text.indexOf('//', n)
                if(ci !== -1 && ci < eol) {
                    fi.return.description = this.text.substring(ci, eol).trim()
                }
            }
        }
        // Find body boundaries { }
        let {start, end} = this.findBracketBoundaries(n)
        if(start === -1 || end === -1) {
            start = end = fi.decEnd +1
        }
        fi.bodyStart = start;
        fi.bodyEnd = end;
        // if(opi2 !== -1) fi.bodyEnd = opi2+1
        // let dbCheck = this.text.substring(fi.bodyStart, fi.bodyEnd)
        // console.log(dbCheck)
        this.gatherCommentMeta(fi)

        return fi
    }

    /*
    First step in identifying a function from the given SourceInfo
    before possibly handing off to `extractMethodInfo`
     */
    extractFunctionInfo(inClass:boolean, si:SourceInfo):FunctionInfo {
        let fi:FunctionInfo = new FunctionInfo()
        let fullsrc
        if(inClass) {
            const src = this.text.substring(si.decStart, si.decEnd)
            const m = src.match(/[a-z|A-Z|_]+\(/)
            if(m) {
                const n = src.indexOf(m[0])
                fullsrc = this.text.substring(this.pos, si.decEnd)
            } else {
                fullsrc = src
            }
        } else {
            const n = this.text.indexOf('{', this.pos)
            fullsrc = this.text.substring(this.pos, n)
        }
        let name = this.getFunctionName(inClass, fullsrc)
        if (name || (inClass && fullsrc.trim().charAt(0) === '(')) {
            if(inClass && fullsrc.indexOf('=') !== -1) {
                return fi
            }
            let longSrc = fullsrc.trim().substring(0, fullsrc.indexOf(name))
            let m = name.match(/\w+$/)
            if(m) {
                longSrc = name.trim().substring(0, name.indexOf(m[0])).replace('*', 'generator ')
                name = m[0]
            }
            if(inClass) longSrc = 'public '+longSrc
            fi = this.extractMethodInfo(name, si, longSrc)
        }
        return fi
    }

    /**
     * Find the start and end positions of potentially nested source code brackets
     */
    findBracketBoundaries(startPos:number, bracket='{'):{start:number, end:number} {
        let bs = this.text.indexOf(bracket, startPos)
        let btext = this.text.substring(bs)


        let endBracket;
        if(bracket === '{') endBracket = '}'
        if(bracket === '[') endBracket = ']'
        if(bracket === '(') endBracket = ')'
        if(bracket === '<') endBracket = '>'
        //
        // let popts = {
        //     pairs: [bracket+endBracket]
        // }
        // be = btext.length
        // try {
        //     let presults = peeler(btext, popts)
        //     be = presults[0].pos.end
        // } catch(e) {
        //     console.log(e)
        // }
        let be = myBracketExtract(btext, bracket+endBracket)
        return {start: bs, end: bs + be}
    }

    /*
     * Determine the line number of the current parse position.
     * Used for error reporting
     */
    private getCurrentLineNumber():number {
        return this.text.substring(0, this.pos).split('\n').length
    }

    /**
     * Returns the collected analysis of source code entities
     */
    getApiInfo(fromPos=0, endPos=0, inClass = false):APIInfo {
        const api:APIInfo = new APIInfo()
        let done = false
        this.pos = fromPos;
        let lastPos = -1
        if(!endPos) endPos = this.text.length;
        while (!done) {
            let si = this.readSourceLine()
            if(this.pos <= lastPos) {
                // console.error(`Synchronization stall on line ${this.getCurrentLineNumber()}`)
                // throw Error('Synchronization Stall')
                this.pos = this.text.indexOf('\n', this.pos+1)
                if(this.pos === -1) this.pos = endPos
                continue
            }
            done = (si.decStart >= endPos || si.decEnd < 0)
            if (!done) {
                lastPos = this.pos
                let fi = this.extractFunctionInfo(inClass, si)
                if(fi.decStart !== -1) {
                    api.functions.push(fi)
                    this.pos = fi.bodyEnd +1
                } else {
                    let ci = this.extractClassInfo(si)
                    if (ci.bodyStart !== -1) {
                        api.classes.push(ci)
                        this.pos = ci.bodyEnd + 1
                    } else {
                        let ei = this.extractEnumInfo(si)
                        if (ei.decStart !== -1) {
                            api.enums.push(ei)
                            this.pos = ei.bodyEnd + 1
                        } else {
                            let ti = this.extractTypedefInfo(si)
                            if (ti.decStart !== -1) {
                                api.typedefs.push(ti)
                                this.pos = ti.bodyEnd + 1
                            } else {
                                let pi = this.extractPropertyInfo(si, inClass);
                                if (pi.decStart !== -1) {
                                    if (pi.name) {
                                        let c = pi.name.charAt(0)
                                        if((c >= 'a' && c <= 'z') || (c >='A' && c<='Z') || c === '_')  // skip if not valid
                                            api.properties.push(pi)
                                        this.pos = pi.decEnd
                                    } else {
                                        this.pos = si.decEnd + 1
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return api
    }

    // tries to extract PropertyInfo information from the given SourceInfo position
    extractPropertyInfo(si:SourceInfo, inClass:boolean):PropertyInfo {
        const pi = new PropertyInfo()
        let text = this.text.substring(si.decStart, si.decEnd).trim()
        if (text.charAt(0) === '/') return pi;
        if (text.substring(0, 6) === 'import') return pi;
        // if (text.substring(0, 6) === 'export') return pi;
        if (text.substring(0, 7) === 'require') return pi;
        let ok = inClass // anything goes for class props
        const allowedPrefixes = ['var', 'let', 'const', 'export', 'public', 'readonly', 'private', 'static']
        for (let pfx of allowedPrefixes) {
            let pl = pfx.length
            if (text.substring(0, pl) === pfx) ok = true
        }
        if(!ok) return pi

        let leftSide = ''
        let rightSide = '';
        let commentAfter = '';
        let ci = text.indexOf('//')
        if(ci === -1) ci = text.indexOf('/*')
        let cc = ''
        if (ci !== -1) cc = text.charAt(ci + 1)
        if (cc === '/' || cc === '*') {
            let ce = text.length
            if (cc == '*') {
                ce = text.indexOf('*/')
                if (ce === -1) ce = text.length
            }
            commentAfter = text.substring(ci + 2, ce)
            text = text.substring(0, ci)
        }
        let ai = text.indexOf('=')
        if (ai !== -1) {
            rightSide = text.substring(ai + 1)
            leftSide = text.substring(0, ai)
        } else {
            leftSide = text;
        }
        leftSide = leftSide.replace(/\s+/g, ' ')
        leftSide = leftSide.replace(': ', ':')
        if (leftSide == '}') return pi

        let type;
        let name = ''
        let p = leftSide.split(' ');
        let sm = new ScopeModifiers()
        if (inClass) sm.public = true
        p.forEach(k => {
            switch (k.trim().toLowerCase()) {
                case 'export':
                case 'public':
                    sm.public = true;
                    sm.private = false;
                    break;
                case 'private':
                    if (sm.public) sm.public = false;
                    sm.private = true;
                    break;
                case 'static':
                    sm.static = true;
                    break;
                case 'const':
                case 'readonly':
                    sm.const = true;
                    break;
                case 'var':
                case 'let':
                    break;
                default:
                    if (k) name = k
                    break;
            }
        })
        ci = name.indexOf(':')
        if (ci !== -1) {
            type = this.readTypeDef(name, ci + 1).trim()
            if (type.charAt(type.length - 1) == ';') type = type.substring(0, type.length - 1)
            name = name.substring(0, ci).trim()
        }
        name = name.trim()
        if (name.charAt(name.length - 1) === '?') {
            sm.optional = true
            name = name.substring(0, name.length - 1)
        }
        if (name.charAt(name.length - 1) === ';') name = name.substring(0, name.length - 1)

        if(!type) type = deriveTypeFromValue(rightSide)
        if (!type) if (rightSide.indexOf('{') !== -1) type = ''
        else if (!type) if (rightSide.indexOf('[') !== -1) type = ''
        else if (!type) if (rightSide.indexOf('function') !== -1) type = 'function'
        else if (!type) if (rightSide.indexOf('=>') !== -1) type = 'function'
        else if (!type) if (rightSide.indexOf('"') !== -1) type = 'string'
        else if (!type) if (rightSide.indexOf("'") !== -1) type = 'string'
        else if (!type) if (rightSide.indexOf('`') !== -1) type = 'string'
        else if (!type) {
            try {
                if (isFinite(parseFloat(rightSide.trim()))) {
                    type = 'number'
                }
            } catch (e) {

            }
        }

        Object.assign(pi, si)

        let bracketed = false;
        if(rightSide.trim().charAt(0) !== '/') { // skip trying to bracket a Regular Expression (we'll start in the wrong place)
            ['[', '{', '('].forEach(bracket => {
                if (!bracketed) {
                    let bi = rightSide.indexOf(bracket)
                    if (bi !== -1) {
                        let {start, end} = this.findBracketBoundaries(si.decStart + ai + bi, bracket)
                        if (end !== -1 && end > si.decEnd) {
                            pi.assignStart = start;
                            pi.decEnd = end;
                            bracketed = true;
                        }
                    }
                }
            })
        }

        if (this.text.substring(si.comEnd, si.decStart).split('\n').length === 2) {
            pi.description = this.readCommentBlock(this.text.substring(si.comStart, si.comEnd))
        }
        if(pi.description && commentAfter) pi.description += '\n' +commentAfter
        else if(commentAfter) pi.description = commentAfter


        // parse out constraints here
        let ctext = pi.description.trim()
        let constraintDeclaration = ''
        const cm = ctext.match(constraintRE)
        if(cm) {
            for(let m of cm) {
                let n = ctext.indexOf(m)
                ctext = ctext.substring(0,n)+ctext.substring(n+m.length)
                if(constraintDeclaration) constraintDeclaration += ', '
                constraintDeclaration += m.substring(1, m.length-1)
            }
        }
        pi.description = ctext
        try {
            if(constraintDeclaration) {
                pi.constraintMap = TypeCheck.parseConstraintsToMap(type, constraintDeclaration)
            }
        } catch (e) {
            console.error(e)
            // error = e.message;
            // status = SpecificationStatus.BadConstraint
        }

        pi.name = name;
        pi.scope = sm;
        pi.type = type;
        if (rightSide && !bracketed) {
            pi.assignStart = this.text.indexOf(rightSide, pi.decStart)
            // if (pi.scope.const) {
                if (type && type !== 'object' && type !== 'function') {
                    pi.default = rightSide.trim().replace(';', '')
                }
            // }
        }
        return pi;
    }

    // tries to extract ClassInfo information from the given SourceInfo position
    // recurses into `getApiInfo` for all entities within the class scope.
    extractClassInfo(si:SourceInfo, isType = false):ClassInfo {
        let ci:ClassInfo = new ClassInfo()
        const src = this.text.substring(si.decStart, si.decEnd)
        if(src.charAt(0) === '/') return ci;
        if(src.substring(0,6) === 'import') return ci;
        if(src.substring(0.7) === 'require') return ci;

        let scopeKey = this.readNextWord(src, 0)
        let sm = new ScopeModifiers()
        if(scopeKey === 'export') {
            sm.public = true
        }
        if(scopeKey === 'interface') {
            ci.isInterface = true
        }
        const name = this.getClassName(src)
        if(name || isType) {
            Object.assign(ci, si)
            ci.name = name;
            // see if we extend
            let rawExtends = this.getExtends(src)
            // see if we implement (typescript)
            ci.implements = this.getImplements(src)
            // or use a mix-in (per style found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#MixIns
            // to find these, look at our parsed-in extends for constructors
            let {mixins, base} = this.findMixins(rawExtends)
            if(base) ci.extends = base;
            ci.mixins = mixins

            ci.scope = sm

            // read description
            let jsDocSignature =  (this.text.substring(ci.comStart, ci.comStart+3) === '/**')
            // we can read the description from the comment block
            let n = ci.comStart;
            let nd = this.text.indexOf('@', n)
            if(nd === -1 || nd > ci.comEnd) nd = ci.comEnd;

            if (this.text.substring(ci.comEnd, ci.decStart).split('\n').length === 2) {
                ci.description = this.readCommentBlock(this.text.substring(n, nd))
            }
            if(!jsDocSignature) {
                ci.status = SpecificationStatus.NoDoc // not JSDoc format anyway
                ci.error = 'Comment block is not recognized as JSDoc form'
            }
            // get the full class definition
            if(si.decStart >= si.comEnd) {
                let {start, end} = this.findBracketBoundaries(si.decStart)
                ci.bodyStart = start;
                ci.bodyEnd = end;
                // now we hunt for methods and props
                ci.internals = this.getApiInfo(start+1, end-1, true)
            }
        }
        return ci
    }
    // Used to determine the name of a class or interface
    getClassName(text:string):string  {
        let name = ''
        text = text.trim()
        let keyword = 'class '
        let i = text.indexOf(keyword)
        if(i === -1) {
            keyword = 'interface '
            i = text.indexOf(keyword)
        }
        if(i !== -1) {
            i += keyword.length
            name = this.readNextWord(text, i)
            // check for an assignment form
            if(!name || name === '{' || name === 'extends') {
                const p = text.split('=', 2)
                const w = p[0].trim().split(' ')
                name = w[w.length-1]
                name = name.trim()
            }

        }
        return name;
    }
    // if the class extends another, the base class name is returned here
    getExtends(text:string):string {
        let ext = ''
        text = text.trim()
        const keyword = 'extends'
        let i = text.indexOf(keyword)
        if(i !== -1) {
            i += keyword.length +1
            ext = this.readNextWord(text, i)
            if(ext.charAt(ext.length-1) === '{') ext = ext.substring(0, ext.length-1)
        }
        return ext;
    }
    // If the class implements one or more interfaces, the array of names is returned here
    getImplements(text:string):string[] {
        let imp:string[] = []
        text = text.trim()
        const keyword = 'implements'
        let i = text.indexOf(keyword)
        if(i !== -1) {
            i += keyword.length +1
            while(i < text.length) {
                let iface:string = this.readNextWord(text, i)
                if(iface === '{') iface = ''
                if(iface) imp.push(iface)
                i += iface.length + 1
            }
        }
        return imp
    }
    // legacy method to recognize mix-in patterns (alternative to implements)
    findMixins(extDec:string) {
        let mixins:string[] = []
        let opi = extDec.indexOf('(')
        let cpi:number|undefined = undefined;
        let base
        while(opi !== -1) {
            cpi = extDec.lastIndexOf(')', cpi)
            if(cpi === -1) break;
            base = extDec.substring(opi+1, cpi)
            let mix = extDec.substring(0, opi).trim()
            mixins.push(mix)
            extDec = base
            opi = extDec.indexOf('(')
        }
        if(!base) base = extDec
        return {mixins, base}
    }

    // Tries to extract EnumInfo from the given SourceInfo position
    extractEnumInfo(si:SourceInfo):EnumInfo {
        const ei = new EnumInfo()
        let text = this.text.substring(si.decStart, si.decEnd).trim()
        if(text.charAt(0) === '/') return ei;
        if(text.substring(0,6) === 'import') return ei;
        // if(text.substring(0,6) === 'export') return ei;
        if(text.substring(0.7) === 'require') return ei;

        let n = text.indexOf('{')
        if(n === -1) {
            return ei
        }
        n = text.indexOf('enum ')
        if(n !== -1) {
            let leftSide = text.substring(0, n).trim()
            let name = text.substring(n + 4).trim()
            if(name.charAt(name.length-1) === '{') name = name.substring(0,name.length-1).trim()
            let p = leftSide.split(' ');
            let sm = new ScopeModifiers()
            p.forEach(k => {
                switch(k.trim().toLowerCase()) {
                    case 'export':
                        sm.public = true;
                        sm.private = false;
                        break;
                    case 'const':
                        sm.const = true;
                        break;
                }
            })
            Object.assign(ei, si)
            ei.name = name
            ei.scope = sm
            if (this.text.substring(si.comEnd, si.decStart).split('\n').length === 2) {
                ei.description = this.readCommentBlock(this.text.substring(si.comStart, si.comEnd))
            }
            // read enum symbols and values
            let obi = this.text.indexOf('{', si.decStart)
            if(obi !== -1) {
                ei.bodyStart = obi+1
                ei.bodyEnd = this.text.indexOf('}', obi)
            }
            let body = this.text.substring(ei.bodyStart, ei.bodyEnd)
            const lns = body.split('\n')
            let preVal = -1
            let preDesc = ''
            for(let ln of lns) {
                ln = ln.trim()
                if(ln) {
                    if(ln.charAt(0) === '/') {
                        let cn = ln.length
                        if(ln.charAt(1) === '*') cn = ln.indexOf('*/')
                        preDesc = ln.substring(2, cn)
                    }
                    let ep = ln.split('=')
                    const ev = new EnumValueInfo()
                    let name = ep[0].trim()
                    let ci = name.indexOf('//')
                    if(ci === -1) ci = name.indexOf('/*')
                    if(ci === -1) {
                        ci = name.length
                    }
                    let di = name.indexOf(',')
                    let e = Math.min(ci,di)
                    if(e === -1) e = Math.max(ci,di)
                    if(e === -1) e = name.length
                    if(ci !== -1) {
                        let desc = name.substring(ci + 2)
                        if (desc.substring(desc.length - 2) === '*/') desc = desc.substring(0, desc.length - 2).trim()
                        ev.description = preDesc ? preDesc +'\n' + desc : desc
                    }
                    ev.name = name.substring(0,e).trim()
                    if(ep[1]) {
                        let ci = ep[1].indexOf('//')
                        if(ci === -1) ci = ep[1].indexOf('/*')
                        if(ci === -1) {
                            ci = ep[1].length
                        }
                        let di = ep[1].indexOf(',')
                        let e = Math.min(ci,di)
                        if(e === -1) e = Math.max(ci,di)
                        let v = ep[1].substring(0, e).trim()
                        if(v.charAt(0) === v.charAt(v.length-1) && v.charAt(0)==='"') {
                            v = v.substring(1, v.length-1)
                        }
                        ev.value = v
                        if(isFinite(Number(ev.value))) ev.value = Number(ev.value)
                        ev.type = typeof (ev.value)
                        if(ci !== -1) {
                            let desc = ep[1].substring(ci + 2)
                            if (desc.substring(desc.length - 2) === '*/') desc = desc.substring(0, desc.length - 2).trim()
                            ev.description = preDesc ? preDesc +'\n' + desc : desc
                        }
                    }
                    if(ev.value === undefined) {
                        ev.value = preVal + 1
                    }
                    if (isFinite(Number(ev.value))) {
                        preVal = Number(ev.value)
                    }
                    if(ev.name) ei.values.push(ev)
                    preDesc = ''
                }
            }
        }

        return ei
    }

    // Tries to extract TypedefInfo from the given SourceInfo position
    extractTypedefInfo(si:SourceInfo) : TypedefInfo {
        const ti = new TypedefInfo()
        let text = this.text.substring(si.decStart, si.decEnd).trim()
        if(text.charAt(0) === '/') return ti;
        if(text.substring(0,6) === 'import') return ti;
        if(text.substring(0,6) === 'export') return ti;
        if(text.substring(0.7) === 'require') return ti;

        let n = text.indexOf('type ')
        if(n !== -1) {
            let e = text.indexOf('=')
            if(e < n) return ti // = must be right of 'type ' for a typedef
            if(e === -1) e = text.length;
            let name = text.substring(n + 4, e).trim()
            if(!name) return ti // we must name a type
            if (name.charAt(name.length - 1) === '{') name = name.substring(0, name.length - 1).trim()
            Object.assign(ti, si)
            ti.name = name
            if (this.text.substring(si.comEnd, si.decStart).split('\n').length === 2) {
                ti.description = this.readCommentBlock(this.text.substring(si.comStart, si.comEnd))
            }
            // read enum symbols and values
            let obi = this.text.indexOf('{', si.decStart)
            if (obi !== -1) {
                ti.form = TypedefForm.Object
                ti.bodyStart = obi
                ti.bodyEnd = si.decEnd
                let csi = new SourceInfo()
                csi.comStart = csi.comEnd = ti.bodyStart-1
                csi.decStart = ti.bodyStart
                csi.decEnd = ti.bodyEnd
                let ci = this.extractClassInfo(csi, true)
                ti.declaration = ci
                ti.bodyEnd = ci.bodyEnd
            } else {
               let m = this.text.substring(si.decStart+e+1).match(/\W/)
               if(m) {
                   let arm = this.text.substring(ti.bodyStart).match(/=\>/)
                   // let fnm = this.text.substring(ti.bodyStart).match(/function*\s*/)

                   let pbi
                   if(arm) {
                       let iarw = ti.bodyStart + (arm?.index || 0)
                       ti.bodyEnd = this.text.indexOf('\n', iarw)
                       let pbm = this.text.substring(si.decStart + e).match(/[a-z|A-Z]|\(/)
                       pbi = pbm && pbm.index
                       // pbe = iarw
                       if(pbi) pbi += si.decStart+e
                       if(pbi && this.text.charAt(pbi) === '(') {
                           ti.bodyStart = pbi
                           // pbi++
                           // pbe = this.text.indexOf(')', pbi)
                       }
                   }
                   // if(fnm) {
                   //     let ifn = ti.bodyStart + (fnm?.index || 0)
                   //     let {end} = this.findBracketBoundaries(ifn)
                   //     ti.bodyStart = ifn
                   //     ti.bodyEnd = end
                   //     pbi = this.text.indexOf('(', ifn)
                   // }

                   // ti.bodyStart = si.decStart + (m.index || e + 1)
                   // m = this.text.substring(ti.bodyStart).match(/=\>/)
                   // if(m && ti.bodyStart + (m?.index||0) < si.decEnd) {
                   if(pbi) {
                       ti.form = TypedefForm.Function
                       let si = new SourceInfo()
                       si.comStart = si.comEnd = ti.bodyStart-1
                       si.decStart = ti.bodyStart
                       si.decEnd = ti.bodyEnd
                       ti.declaration = this.extractMethodInfo(ti.name, si)
                       // ti.bodyEnd = ti.declaration.bodyEnd

                   } else {
                       ti.form = TypedefForm.Primitive
                       ti.bodyStart = this.text.indexOf('=', si.decStart) +1

                       let be = this.text.indexOf('\n', ti.bodyStart)
                       if(be === -1) be = this.text.length
                       let ci = ti.bodyStart + this.text.substring(be).indexOf('/')
                       if(ci !== -1) {
                           let cmt = ''
                           if (this.text.charAt(ci + 1) === '/') {
                               be = this.text.indexOf('\n', ci + 2)
                               cmt = this.text.substring(ci + 3, be).trim()
                               if (be !== -1) be++
                               else be = this.text.length
                           }
                           if (this.text.charAt(ci + 1) === '*') {
                               be = this.text.indexOf('*/', ci + 2)
                               cmt = this.text.substring(ci + 3, be).trim()
                               if (be !== -1) be += 2
                               else be = this.text.length
                           }
                           ti.bodyEnd = be
                           ti.description += '\n' + cmt
                       }

                   }
               }
            }
            let body = this.text.substring(ti.bodyStart, ti.bodyEnd)
            if(ti.form === TypedefForm.Primitive) {
                let ci = body.indexOf('//')
                if(ci === -1) ci = body.indexOf('/*')
                if(ci === -1) ci = body.length
                ti.type = body.substring(0,ci).trim()
            } else {
                ti.type = TypedefForm[ti.form].toLowerCase()
            }
            // parse out constraints here
            let constraintDeclaration = ''
            let desc = ti.description
            const cm = desc.match(constraintRE)
            if(cm) {
                for(let m of cm) {
                    let n = desc.indexOf(m)
                    desc = desc.substring(0,n)+desc.substring(n+m.length)
                    if(constraintDeclaration) constraintDeclaration += ', '
                    constraintDeclaration += m.substring(1, m.length-1)
                }
            }
            ti.description = desc
            try {
                if(constraintDeclaration) {
                    ti.constraintMap = TypeCheck.parseConstraintsToMap(ti.type, constraintDeclaration)
                }
            } catch (e) {
                console.error(e)
            }

        }
        return ti
    }

    /**
     * Reads comment block
     *  - reads primary description
     *  - reads JSDoc values from param or return blocks, and use if we don't have these from code parse
     */
    gatherCommentMeta(fi:FunctionInfo) {
        // const comBlock = this.text.substring(fi.comStart, fi.comEnd)
        let jsDocSignature =  (this.text.substring(fi.comStart, fi.comStart+3) === '/**')
        // we can only read the description from the comment block
        let n = fi.comStart;
        let nd = this.text.indexOf('@', n)
        if(nd === -1) nd = this.text.length

        // skip any reserved in-comment pass-throughs
        while(this.text.substring(nd, nd+7)=== '@public'
            || this.text.substring(nd, nd+7)==='@throws'
            || this.text.substring(nd, nd+7)==='@yields') {
            nd = this.text.indexOf('@', nd+1)
        }
        if(nd === -1 || nd > fi.comEnd) nd = fi.comEnd;
        if(this.text.substring(fi.comEnd, fi.decStart).split('\n').length === 2) {
            fi.description = this.readCommentBlock(this.text.substring(n, nd))
        }
        if(!jsDocSignature) {
            fi.status = SpecificationStatus.NoDoc // not JSDoc format anyway
            fi.error = 'Comment block is not recognized as JSDoc form'
        }
        // Process the comment block as JSDOC even if it's not in that form.
        let xi = this.text.indexOf('@public', n)
        if(xi !== -1 && xi < fi.comEnd ) {
            fi.scope.public = true
        }

        let ri = this.text.indexOf('@return', n)
        if(ri >= fi.comEnd || ri === -1) ri = fi.comEnd;
        let pIndex = 0

        while (n !== -1 && n < fi.comEnd) {
            let desc = '';
            let pi = this.text.indexOf('@param', n)
            if (pi === -1 || pi >= fi.comEnd) pi = fi.comEnd
            if (pi < fi.comEnd) {
                let pe = this.text.indexOf('@', pi+1)
                if(pe === -1 || pe > fi.comEnd) pe = fi.comEnd
                let pd = this.readCommentBlock(this.text.substring(pi, pe))
                pd = pd.substring('@param'.length + 1)
                const pInfo = new ParameterInfo()
                // at this point, pi, pe are the locations of this param line
                // and pe -> next delimiter is block, but we do that below
                n = pe

                // parse out constraints here
                let constraintDeclaration = ''
                const cm = pd.match(constraintRE)
                if(cm) {
                    for(let m of cm) {
                        let n = pd.indexOf(m)
                        pd = pd.substring(0,n)+pd.substring(n+m.length)
                        if(constraintDeclaration) constraintDeclaration += ', '
                        constraintDeclaration += m.substring(1, m.length-1)
                    }
                }

                let fpi = fi.params[pIndex]
                // here we parse the gist of the param declaration
                // same template hack as in typescript parse above
                let oti = pd.indexOf('<')
                let ahi = pd.indexOf('{')
                if (oti === -1) oti = ahi
                if (oti !== -1) {
                    // craziness if we have to handle a template
                    let cti = pd.indexOf(ahi === -1 ? '>' : '}', oti)
                    let swap = pd.substring(oti, cti).replace(' ', '')
                    swap = swap.replace(',', ';;')
                    pd = pd.substring(0, oti) + swap + pd.substring(cti)
                }

                let pp = pd.split(/\s+/)
                for (let i = 0; i < 2; i++) {
                    let p = pp[i]
                    if (p && p !== '//') {
                        p = p.trim().replace(';;', ',') // template fix
                        if (p === '-') {
                            pp.splice(2, 0, '-')
                            if (!pInfo.type) pInfo.type = fpi.type;
                            if (!pInfo.name) pInfo.name = fpi.name;
                            break;
                        }
                        if (p.charAt(0) == '{' && p.charAt(p.length - 1) == '}') {
                            pInfo.type = p.substring(1, p.length - 1)
                        } else if (p.charAt(0) == '[') {
                            pInfo.name = p.substring(1, p.length - 1)
                            pInfo.optional = true
                            if (pp[i + 1] === '=') {
                                pInfo.default = pp[i + 2]
                                pp.splice(i + 1, 2)
                                break;
                            }
                        } else {
                            pInfo.name = p.trim();
                        }
                    }
                }
                // pick up remainder of line
                if (pp.length > 2) {
                    desc = pp.slice(2).join(' ') // description on the same line
                }

                // reconcile to any parsed information from actual function declaration
                let agree = true
                if (fpi) {
                    if (!fpi.type) fpi.type = pInfo.type
                    if (!fpi.name) fpi.name = pInfo.name
                    if(!fpi.description) fpi.description = desc
                    if (fpi.ordinal !== pIndex + 1) agree = false
                    if (fpi.name !== pInfo.name) agree = false
                    if (this.fileType === 'typescript') {
                        if(fpi.description !== desc) agree = false;
                        if (fpi.type && fpi.type !== pInfo.type) agree = false;
                        if (fpi.name && fpi.name !== pInfo.name) agree = false;
                        if (fpi.optional !== pInfo.optional) agree = false
                    }
                } else {
                    fpi = new ParameterInfo()
                    fpi.name = pInfo.name;
                    fpi.type = pInfo.type;
                    fpi.status = SpecificationStatus.Mismatch;
                    fpi.error = 'Parameter count mismatch'
                }
                if (!agree) {
                    if (fpi.status === SpecificationStatus.None) fpi.status = SpecificationStatus.Mismatch
                    fi.error = 'name, type or description mismatch with declared parameter'
                }
                try {
                    if(constraintDeclaration) {
                        fpi.constraintMap = TypeCheck.parseConstraintsToMap(pInfo.type, constraintDeclaration)
                    }
                    if (fpi.status === SpecificationStatus.None) fpi.status = SpecificationStatus.Okay
                } catch (e) {
                    console.error(e)
                    fi.error = e.message;
                    if (fpi.status === SpecificationStatus.None) fpi.status = SpecificationStatus.BadConstraint
                }
                // onward
                fi.params[pIndex++] = fpi;
                // n += di-pi
            } else {
                break; // pi === -1; end while
            }
        } // keep reading parameters until we've seen a different directive or exhausted the comment block
        // now read the return type
        let type, cbi, hasReturn = true;
        if(!fi.return) {
            let rt = this.text.substring(ri, ri + '@returns'.length)
            if (rt === '@returns') ri += '@returns '.length
            else if (rt === '@return ') ri += '@return '.length - 1
            else {
                // no jsdoc return declaration
                hasReturn = false
                cbi = ri
                type = ''
            }
            if (hasReturn) {
                let obi = this.text.indexOf('{', ri)
                if (obi !== -1 && obi < fi.comEnd) {
                    cbi = this.text.indexOf('}', ++obi)
                    type = this.text.substring(obi, cbi)
                } else {
                    cbi = ri
                    type = ''
                }
                fi.return = new ReturnInfo()
                fi.return.type = type;
            }
        }
    }

    private readCommentBlock(rawBlock:string):string {
        return this.readCommentBlockForm1(rawBlock) || this.readCommentBlockForm2(rawBlock)
    }

    private readCommentBlockForm1(rawBlock:string):string {
        if(rawBlock.substring(0,3) === '/**') {
            rawBlock = rawBlock.substring(3)
        } else if(rawBlock.substring(0,2) === '/*') {
            rawBlock = rawBlock.substring(2)
        } else if(rawBlock.substring(0,2) === '//') {
            return '' // return empty so we parse form 2, otherwise fall through for inline comment processing
        }
        if(rawBlock.substring(rawBlock.length-2) === '*/') {
            rawBlock = rawBlock.substring(0, rawBlock.length-2);
        }
        const lns:string[] = rawBlock.split('\n')
        const clean:string[] = []
        lns.forEach(ln => {
            ln = ln.trim()
            if(ln.charAt(0) === '*') {
                ln = ln.substring(1).trim()
            }
            clean.push(ln)
        })
        return clean.join('\n').trim()
    }

    private readCommentBlockForm2(rawBlock:string):string {
        const clean:string[] = []
        let blockPos = 0;
        while(rawBlock.substring(blockPos,blockPos+2) == '//') {
            let n = rawBlock.indexOf('\n', blockPos)
            if(n === -1) n = rawBlock.length;
            clean.push(rawBlock.substring(blockPos+2, n).trim())
            blockPos = n+1
        }
        return clean.join('\n').trim()
    }
}

// returns the associated primitive type for a value represented by the given value string
function deriveTypeFromValue(value:string) {
    if(!value) value = ''
    value = value.trim()
    if(value.length > 1 && value.charAt(0) == value.charAt(value.length-1)) {
        const q = value.charAt(0)
        if(q === '"' || q === "'" || q === '`') {
            return "string"
        }
        if(q === '[') return 'array'
        if(q === '{') return 'object'
    }
    if(value === 'true' || value === 'false') return 'boolean'
    if(value === '') return 'string'
    if(isFinite(Number(value))) return 'number'
    return typeof value
}

/**
 * My own bracket matching algorithm
 *
 * Tried using libraries from npm, such as
 * `parenthesis`, `g2-bracket-parser` and `peeler`
 * but each of these had some failing or another that prevented it from
 * working as I needed it.
 *
 * This version works, although it is not elegant.
 * It parses one character at a time, which thankfully turns out to run faster than
 * I originally feared.
 * This allows treating the problem from a state-machine perspective, and
 * there is no chance of skipping a stateful event
 * (although I suppose an optimization could be made to skip whitespace, or clearly defined comment blocks).
 *
 * This simply counts brackets and levels until we return to level 0
 * it statefully ignores brackets that are out of scope, including cases for:
 * - comments
 * - quoted strings (single, double, and backtick)
 * - handles escapes for quote scope recognition
 *
 * @param src   The bracketed source
 * @param pair  The matching pair that define the bracket delimiters
 */
function myBracketExtract(src:string, pair:string) {
    let bracket = pair.charAt(0)
    let endBracket = pair.charAt(1)
    let currentLevel = 0
    let endPos = -1

    let done = false
    let pos = -1
    let inComment = false
    let inQuote = ''
    let comEnd = ''
    // slowboat version
    try {
        let wasesc = false
        while (!done) {
            let escaped = !wasesc && src.charAt(pos) === '\\'
            // if (escaped) {
            //     console.log('break here for escape at ' + pos)
            // }
            // if(pos > 2209) {
            //     console.log('break here to start stepping')
            // }
            let c = src.charAt(++pos)
            if(escaped && c === '\\') {
                wasesc = true
                continue
            }
            if(!c) break;
            if (inComment) {
                if (!escaped && c === comEnd.charAt(0)) {
                    if (comEnd === '*/') {
                        if(src.charAt(pos+1) == comEnd.charAt(1)) {
                            inComment = false
                            pos++
                        }
                    } else {
                        inComment = false
                    }
                }
                if(c !== inQuote) continue
            }
            if (!escaped && !inQuote && c === '/') {
                pos++
                let c2 = src.charAt(pos)
                if (c2 === '/') comEnd = '\n'
                else if(c2 === '*') comEnd = '*/'
                else comEnd = ''
                inComment = comEnd !== ''
            }
            if (!escaped && !inComment && (c === '"' || c === "'" || c === '`')) {
                if (c === inQuote) {
                    inQuote = ''
                }
                else if(!inQuote) {
                    inQuote = c
                }
            }
            if (inQuote) continue

            if (c === bracket) {
                ++currentLevel
            }
            if (c === endBracket) {
                --currentLevel
                done = currentLevel == 0
            }
        }
    } catch(e) {
        console.error(e)
    }
    endPos = pos
    let firstOpen = src.indexOf(bracket)
    let extract = src.substring(firstOpen, endPos+1).trim()
    return extract.length
}