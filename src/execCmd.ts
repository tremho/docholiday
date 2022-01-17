
import {exec} from 'child_process'
import * as path from 'path'

export function executeCommand(cmd:string, args:any[],  cwd = '', consolePass = false, env:any = {}):Promise<any> {
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
