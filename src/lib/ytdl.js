const dargs = require('dargs')
const execa = require('execa')

const args = (url, flags = {}) =>
  [].concat(url, dargs(flags, { useEquals: false })).filter(Boolean)

const isJSON = (str) => str.startsWith('{')

const parse = ({ stdout }) => (isJSON(stdout) ? JSON.parse(stdout) : stdout)

const raw = (url, flags, opts) =>
  execa('youtube-dl.exe', args(url, flags), opts)

module.exports = (url, flags, opts) => raw(url, flags, opts).then(parse)
