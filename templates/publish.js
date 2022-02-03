/* eslint-disable no-empty-function, no-unused-vars */

const path = require('path')
const fs = require('fs')
/**
 @param {TAFFY} taffyData See <http://taffydb.com/>.
 @param {object} opts
 @param {Tutorial} tutorials
 */
exports.publish = (taffyData, opts, tutorials) => {

  // console.log("We've intercepted the publish")
  // console.log("options", opts)

  const conf = readConfig(opts.configure)
  const template = conf?.opts?.template || opts.template || 'templates/default'
  const sortOpt = opts?.sort
  const orig = linkTemplateDir(template)


  const orgsort = taffyData.sort
  taffyData.sort = (...args) => {
    // console.log("intercepted and disabled sort", 'Sort option = ', sortOpt)
    if(!sortOpt) {
      console.log('entities will appear in source order')
      return;
    } // disable if sort === false
    console.log('entities will be sorted per jsdoc template '+template)
    orgsort(...args)
  }

  return orig.publish(taffyData, opts, tutorials)

};

function readConfig(configPath) {
  const fs = require('fs')
  const path = require('path')
  const hjson = require('hjson')

  let fn = path.resolve(configPath)
  try {
    const contents = fs.readFileSync(fn).toString()
    return hjson.parse(contents)
  } catch(e) {
    console.error(e)
    throw e
  }
}

function linkTemplateDir(template) {
  const fs = require('fs')
  const path = require('path')
  if(!template) template = 'templates/default'
  let otp = path.resolve(template)
  if(!fs.existsSync(otp)) {
    otp = path.join('node_modules', template)
  }
  if(!fs.existsSync(otp)) {
    otp = path.join('node_modules','jsdoc', template)
  }
  if(!fs.existsSync(otp)) {
    otp = path.join('..','node_modules','jsdoc', template)
  }
  if(!fs.existsSync(otp)) {
    // TODO: Build this path for current context
    otp = path.resolve('/Users/sohmert/.nvm/versions/node/v16.5.0/lib/node_modules/jsdoc', template)
  }
  otp = path.resolve(otp);

  const fn = path.resolve('templates')
  const lstatic = path.join(fn, 'static')
  const ltmpl = path.join(fn, 'tmpl')
  try {
    fs.unlinkSync(lstatic)
    fs.unlinkSync(ltmpl)
  } catch(e) {}
  fs.symlinkSync(path.join(otp, 'static'), lstatic)
  fs.symlinkSync(path.join(otp, 'tmpl'), ltmpl)

  return require(path.join(otp,'publish'))

}
