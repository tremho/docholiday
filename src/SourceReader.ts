/*
Status:
9/8 - identifies function declaration starts in example source file
Next:
    - parse out function name and parameters from declaration
    - parse out parameter and return metadata from jsdoc
    - do a variant for typescript that reads parameter and return types from there
 */

import {ScopeModifiers, SourceInfo,FunctionInfo, PropertyInfo, ClassInfo,
        APIInfo, SpecificationStatus, ReturnInfo, ParameterInfo} from "./types";

import * as TypeCheck from "./TypeCheck"
import {TypeConstraint} from "./TypeCheck"
import * as Parenthesis from "parenthesis"
import {type} from "os";

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

    pastWhite(str:string, startIndex:number = 0) {
        let n = startIndex
        while(str.charCodeAt(n) < 33) n++;
        return n;
    }
    skipWhite() {
        this.pos = this.pastWhite(this.text, this.pos)
    }
    findWhite(str, startIndex) {
        let n = startIndex
        while(str.charCodeAt(n) > 32) n++;
        return n;
    }
    readNextWord(str, startIndex) {
        let b = this.pastWhite(str, startIndex)
        let e = this.findWhite(str, b)
        return str.substring(b, e)
    }
    nextEnd() {
        // find end from here to end of line or start of comment
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
        if(nd === this.text.length -1) {
            nd = lnEnd
        }
        return nd;
    }
    readSourceLine() {
        const rt = new SourceInfo()
        this.skipWhite()
        let n = this.nextEnd()
        // let c = this.text.substring(this.pos, n) // this is the comment block above the source
        rt.comStart = this.pos;
        if(this.text.charAt(this.pos) === '/') {
            if(this.text.charAt(this.pos+1) === '/') { // handle possible multiline double-slash comment
                let p = this.pos;
                while(this.text.substring(p, p+2) === '//') {
                    let n = this.text.indexOf('\n', p)
                    p = n+1;
                }
                rt.comEnd = p-1;
                n = p
            } else {
                rt.comEnd = n - 2
            }
        } else {
            // not a comment
            n = rt.comStart = rt.comEnd = this.pos
        }

        if(rt.comEnd < rt.comStart) rt.comEnd = rt.comStart; // no comment
        this.pos = n;
        this.skipWhite()
        n = this.nextEnd()
        rt.decEnd = n;
        rt.decStart = this.pos;
        return rt;
    }
    readTypeDef(str, startIndex) {
        let type = this.readNextWord(str, startIndex)
        if(type.charAt(type.length-1) === ',') type = type.substring(0,type.length-1)
        let bs = str.indexOf('{', startIndex)
        if(bs !== -1) {
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
            if(n !== -1) {
                let name = exported ? 'public ' : ''
                if(async) name += 'async '
                name += text.substring(kwLength+1, n).trim()
                return name
            }
        }
        // see if function keyword is on right side of an assignment
        const ap = text.split('=')
        if(ap[1]) {
            let t = ap[1].trim()
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
    findFunctions():FunctionInfo[] {
        const found:FunctionInfo[] = []
        this.pos = 0;
        let done = false
        while(!done) {
            let si = this.readSourceLine()
            done = (si.decStart === this.text.length || si.decEnd < 0)
            if(!done) {
                let fi = this.extractFunctionInfo(false, si)
                if (fi.decStart !== -1) {
                    found.push(fi)
                }
            }
        }
        return found
    }
    extractMethodInfo(name, si:SourceInfo):FunctionInfo {
        let fi:FunctionInfo = new FunctionInfo()
        Object.assign(fi, si)

        let p = name.split(' ');
        let sm = new ScopeModifiers()
        p.forEach(k => {
            switch(k.trim().toLowerCase()) {
                case 'async':
                    sm.async = true;
                    break;
                case 'public':
                    sm.public = true;
                    break;
                case 'private':
                    sm.private = true;
                    break;
                case 'static':
                    sm.static = true;
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

        // index past name
        let opi = this.text.indexOf(name, si.decStart) + name.length;
        opi = this.text.indexOf('(', opi)
        let cpi = this.text.indexOf(')', opi)
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

        // YOU ARE HERE
        // piece parse pdec
        // name:type, \n | comment,
        // ++++[   ]*        *
        while(pdec) {
            pdec = pdec.trim()
            let c = pdec.indexOf(':')
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
            let ntc = pdec.substring(0, d)
            let nt = ntc.split(':')
            const pi = new ParameterInfo()
            pi.name = nt[0].trim()
            let td = (type || nt[1] || '').trim().split('=')
            pi.type = this.readTypeDef(td[0].trim(), 0)
            if(td[1]) {
                pi.default = td[1].trim()
                pi.optional = true
            }

            m = pdec.indexOf('/')
            let x = pdec.indexOf(',')
            if(x === -1) x = pdec.indexOf('\n')
            if (x === -1) x = pdec.length
            else x++
            if (m !== -1) {
                if (pdec.charAt(m + 1) === '/') {
                    let n = pdec.indexOf('\n')
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
            fi.params.push(pi)
            pdec = pdec.substring(x)
        }
        // typescript can provide return type
        let n = this.pastWhite(this.text, cpi + 1);
        if(this.fileType === 'typescript') {
            if (this.text.charAt(n) === ':') {
                fi.return = new ReturnInfo();
                let bs = this.text.indexOf('{', n+1)
                if(bs === -1) bs = this.text.length
                let c = this.text.indexOf('/', n+1)
                let e = Math.min(bs, c)
                if(e === -1) e = Math.max(bs, c)
                let rt = this.text.substring(n+1, e)
                fi.return.type = this.readTypeDef(rt, 0)
                n += fi.return.type.length
                let m = this.text.indexOf('/', n+1)
                if(m !== -1 && m < bs) {
                    fi.return.description = this.text.substring(m+2, bs).trim() || ''
                } else {
                    fi.return.description = ''
                }
            }
        }
        // Find body boundaries { }
        let {start, end} = this.findBracketBoundaries(n)
        fi.bodyStart = start;
        fi.bodyEnd = end;
        // let dbCheck = this.text.substring(fi.bodyStart, fi.bodyEnd)
        // console.log(dbCheck)
        this.gatherCommentMeta(fi)

        return fi
    }
    extractFunctionInfo(inClass:boolean, si:SourceInfo):FunctionInfo {
        let fi:FunctionInfo = new FunctionInfo()
        const src = this.text.substring(si.decStart, si.decEnd)
        const name = this.getFunctionName(inClass, src)
        if (name) {
            fi = this.extractMethodInfo(name, si)
        }
        return fi
    }
    findBracketBoundaries(startPos:number, bracket='{'):{start:number, end:number} {
        let bs = this.text.indexOf(bracket, startPos)
        let pres = Parenthesis(this.text.substring(bs))
        const sectionLength = (section) => {
            let sl = 0;
            for (let i =0; i<section.length; i++) {
                let ct = section[i]
                if(Array.isArray(ct)) {
                    sl += sectionLength(ct)
                } else {
                    sl += ct.length;
                }
            }
            return sl
        }

        let be = sectionLength(pres[1])
        return {start: bs, end: bs+be+2}
    }


    getAPIInfo(fromPos=0, endPos=0):APIInfo {
        const api:APIInfo = new APIInfo()
        let done = false
        let inClass = fromPos > 0;
        this.pos = fromPos;
        if(!endPos) endPos = this.text.length;
        while (!done) {
            let si = this.readSourceLine()
            done = (si.decStart >= endPos || si.decEnd < 0)
            if (!done) {
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
                        let pi = this.extractPropertyInfo(si);
                        if(pi.name) {
                            api.properties.push(pi)
                            this.pos = pi.decEnd + 1
                        } else {
                            this.pos = si.decEnd + 1
                        }
                    }
                }
            }
        }
        return api
    }

    extractPropertyInfo(si:SourceInfo):PropertyInfo {
        const pi = new PropertyInfo()
        let text = this.text.substring(si.decStart, si.decEnd).trim()
        let leftSide = ''
        let rightSide = '';
        let commentAfter = '';
        let ci = text.indexOf('/')
        let cc = ''
        if(ci !== -1) cc = text.charAt(ci+1)
        if(cc === '/' || cc === '*') {
            commentAfter = text.substring(ci+2)
            text = text.substring(0, ci)
        }
        let ai = text.indexOf('=')
        if(ai !== -1) {
            rightSide = text.substring(ai+1)
            leftSide = text.substring(0, ai)
        } else {
            leftSide = text;
        }
        if(leftSide == '}') return pi

        let type;
        let name = ''
        let p = leftSide.split(' ');
        let sm = new ScopeModifiers()
        p.forEach(k => {
            switch(k.trim().toLowerCase()) {
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
                case 'const':
                    sm.const = true;
                    break;
                default:
                    if(k) name = k
                    break;
            }
        })
        ci = name.indexOf(':')
        if(ci !== -1) {
            type = this.readTypeDef(name, ci+1).trim()
            if(type.charAt(type.length-1) == ';') type = type.substring(0, type.length-1)
            name = name.substring(0, ci).trim()
        }
        if(name.charAt(name.length-1) === '?') {
            sm.optional = true
            name = name.substring(0, name.length-1)
        }
        name = name.trim()
        if(name.charAt(name.length-1) ===';') name = name.substring(0, name.length-1)

        if(!type) if(rightSide.indexOf('{') !== -1) type = ''
        else if(!type) if(rightSide.indexOf('[') !== -1) type = ''
        else if(!type) if(rightSide.indexOf('function') !== -1) type='function'
        else if(!type) if(rightSide.indexOf('=>') !== -1) type='function'
        else if(!type) if(rightSide.indexOf('"')!==-1) type='string'
        else if(!type) if(rightSide.indexOf("'")!==-1) type='string'
        else if(!type) if(rightSide.indexOf('`')!==-1) type='string'
        else if(!type) {
            try {
                if (isFinite(parseFloat(rightSide.trim()))) {
                    type = 'number'
                }
            } catch (e) {

            }
        }

        Object.assign(pi, si)

        let bracketed = false;
        ['[','{','('].forEach(bracket => {
            if(!bracketed) {
                let bi = rightSide.indexOf(bracket)
                if (bi !== -1) {
                    let {start, end} = this.findBracketBoundaries(si.decStart+ai+bi, bracket)
                    if (end !== -1 && end > si.decEnd) {
                        pi.assignStart = start;
                        pi.decEnd = end;
                        bracketed = true;
                    }
                }
            }
        })

        pi.description = this.readCommentBlock(this.text.substring(si.comStart, si.comEnd))
        if(pi.description && commentAfter) pi.description += '\n' +commentAfter
        else if(commentAfter) pi.description = commentAfter
        pi.name = name;
        pi.scope = sm;
        pi.type = type;
        if(rightSide && !bracketed) {
            pi.assignStart = this.text.indexOf(rightSide, pi.decStart)
            if(pi.scope.const) {
                if(type && type !== 'object' && type !== 'function') {
                    pi.default = rightSide.trim()
                }
            }
        }
        return pi;
    }

    extractClassInfo(si:SourceInfo):ClassInfo {
        let ci:ClassInfo = new ClassInfo()
        const src = this.text.substring(si.decStart, si.decEnd)
        const name = this.getClassName(src)
        if(name) {
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

            // read description
            let jsDocSignature =  (this.text.substring(ci.comStart, ci.comStart+3) === '/**')
            // we can read the description from the comment block
            let n = ci.comStart;
            let nd = this.text.indexOf('@', n)
            if(nd === -1 || nd > ci.comEnd) nd = ci.comEnd;
            ci.description = this.readCommentBlock(this.text.substring(n, nd))
            if(!jsDocSignature) {
                ci.status = SpecificationStatus.NoDoc // not JSDoc format anyway
                ci.error = 'Comment block is not recognized as JSDoc form'
            }
            // get the full class definition
            if(si.decStart >= si.comEnd) {
                let {start, end} = this.findBracketBoundaries(si.decStart)
                ci.bodyStart = start;
                ci.bodyEnd = end;
                // now we would hunt for methods and props
                ci.internals = this.getAPIInfo(start+1, end)
            }
        }
        return ci
    }
    getClassName(text:string):string  {
        let name = ''
        text = text.trim()
        const keyword = 'class'
        let i = text.indexOf(keyword)
        if(i !== -1) {
            i += keyword.length +1
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
        return {mixins, base}
    }

    /**
     * Read comment block
     */
    gatherCommentMeta(fi:FunctionInfo) {
        // const comBlock = this.text.substring(fi.comStart, fi.comEnd)
        let jsDocSignature =  (this.text.substring(fi.comStart, fi.comStart+3) === '/**')
        // we can only read the description from the comment block
        let n = fi.comStart;
        let nd = this.text.indexOf('@', n)
        if(nd === -1 || nd > fi.comEnd) nd = fi.comEnd;
        fi.description = this.readCommentBlock(this.text.substring(n, nd))
        if(!jsDocSignature) {
            fi.status = SpecificationStatus.NoDoc // not JSDoc format anyway
            fi.error = 'Comment block is not recognized as JSDoc form'
        }
        // Process the comment block as JSDOC even if it's not in that form.
        let ri = this.text.indexOf('@return', n)
        if(ri >= fi.comEnd || ri === -1) ri = fi.comEnd;
        let pIndex = 0
        if(!fi.params.length) {
            while (n !== -1) {
                let desc = '';
                let pi = this.text.indexOf('@param', n)
                if (pi >= fi.comEnd) pi = -1;
                if (pi !== -1) {
                    let pe = this.text.indexOf('\n', pi)
                    let pd = this.text.substring(pi, pe)
                    pd = pd.substring('@param'.length + 1)
                    const pInfo = new ParameterInfo()
                    // at this point, pi, pe are the locations of this param line
                    // and pe -> next delimiter is block, but we do that below

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
                        if (p) {
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
                        if (fpi.ordinal !== pIndex + 1) agree = false
                        if (fpi.name !== pInfo.name) agree = false
                        if (this.fileType === 'typescript') {
                            if (fpi.type !== pInfo.type) agree = false;
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
                        fi.error = 'name or type mismatch with declared parameter'
                    }
                    // next line
                    pi = pe + 1
                    // continue reading the description and constraints
                    desc.trim();
                    let constraintDeclaration;
                    if (desc.charAt(0) === '-') {
                        constraintDeclaration = desc;
                        desc = '';
                    }
                    let di = this.text.indexOf('@', pi)
                    if (di === -1 || di > fi.comEnd) di = fi.comEnd
                    let cb = this.readCommentBlock(this.text.substring(pi, di))
                    if (cb) {
                        if (cb.charAt(0) === '-') {
                            constraintDeclaration = cb;
                        } else {
                            if (desc) desc += '\n'
                            desc += cb;
                        }
                    }
                    if (desc) {
                        fpi.description = desc;
                    }
                    try {
                        // fpi.constraint = TypeCheck.parseConstraints(pInfo.type, constraintDeclaration)
                        fpi.constraintMap = TypeCheck.parseConstraintsToMap(pInfo.type, constraintDeclaration)
                        if (fpi.status === SpecificationStatus.None) fpi.status = SpecificationStatus.Okay
                    } catch (e) {
                        console.error(e)
                        fi.error = e.message;
                        if (fpi.status === SpecificationStatus.None) fpi.status = SpecificationStatus.BadConstraint
                    }
                    // onward
                    fi.params[pIndex++] = fpi;
                    n = di
                } else {
                    break; // pi === -1; end while
                }
            } // keep reading parameters until we've seen a different directive or exhausted the comment block
        }
        // now read the return type
        let type, cbi, hasReturn = true;
        if(!fi.return) {
            let rt = this.text.substring(ri, ri + '@returns'.length)
            if (rt === '@returns') ri += '@returns '.length
            else if (rt === '@return ') ri += '@return '.length - 1
            else {
                // no return statement
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
                    type = 'any'
                }
                fi.return = new ReturnInfo()
                fi.return.type = type;
            }
        }
        /*
        let cb = fi.description ? this.readCommentBlock(this.text.substring(cbi+1, fi.comEnd)) : ''
        let desc = cb;
        cbi++;
        let rtConstDec;
        desc.trim();
        if(desc.charAt(0) === '-') {
            let n = desc.indexOf('\n')
            if(n === -1) n = desc.length
            rtConstDec =  desc.substring(0, n);
            desc = desc.substring(n+1)
        } else {
            let s = desc.indexOf('\n -')
            if(s !== -1) {
                let n = desc.indexOf('\n', s + 3)
                if(n === -1) n = desc.length
                rtConstDec = desc.substring(s + 2, n)
                desc = desc.substring(0, s)
            }
        }
        if(desc === "*") desc = ''

        let retInfo = fi.return
        if(retInfo) {
            retInfo.description = desc;
            if (rtConstDec) {
                retInfo.constraintMap = TypeCheck.parseConstraintsToMap(type, rtConstDec)
                // retInfo.constraint = TypeCheck.parseConstraints(type, rtConstDec)
            }
            retInfo.status = SpecificationStatus.Okay
            if (this.fileType === 'typescript') {
                if (retInfo.type && type !== retInfo.type) {
                    retInfo.status = SpecificationStatus.Mismatch;
                    let rtt = type ? 'No documented return type ' : `Doc return type '${type}'`
                    fi.error = `${rtt} differs from '${retInfo.type}' declared with Typescript`
                }
            }
        }
        */
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
