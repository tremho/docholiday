/*
Module for the `executeCommand` function
 */

import {exec} from 'child_process'
import * as path from 'path'

/**
 * Execute an external command and return the results
 * in stdout string, stderr string, return code.
 * Optionally allow command to echo to console in real time, or run silent.
 * @param cmd           The command to execute
 * @param args          arguments to pass to command, as an array
 * @param [cwd]         current working directory to run command, if not the currently set one
 * @param [consolePass] provide `true` to allow command to echo its output in real time
 * @param [env]         set any environment values, in key=value form.
 * @return {{stdStrr:string, errStr:string, retcode:number}} Promise resolves with an object where retcode is the return code,
 *          stdStr is the command's captured stdout text, and errStr is the command's captured stderr output
 */
export async function executeCommand(cmd:string, args:any[],  cwd = '', consolePass = false, env:any = {}):Promise<any> {
    const out = {
        stdStr: '',
        errStr: '',
        retcode: 0
    }
    return  new Promise(resolve => {
        let cmdstr = cmd + ' ' + args.join(' ')
        // console.log('executing ', cmdstr, 'at', cwd)
        const opts = {
            cwd:cwd,
            env: Object.assign(env, process.env)
        }
        const proc = exec(cmdstr, opts)
        if(proc.stdout) proc.stdout.on('data', data => {
            out.stdStr += data.toString()
            if(consolePass) console.log(data.toString().trim())
        })
        if(proc.stderr) proc.stderr.on('data', data => {
            out.errStr += data.toString()
            if(consolePass) console.error(data.toString().trim())
        })
        proc.on('error', error => {
            console.error(error)
            if(!out.errStr) out.errStr = error.message
            out.retcode = -1
            resolve(out)
        })
        proc.on('close', code => {
            out.retcode = code === null ? -1 : code
            resolve(out)
        })
    })
}
