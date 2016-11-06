const objectAssign = require('object-assign')

function isSupported(prop) {
  var i
  if (prop == null) {
    return false
  }
  if (prop === 'promise') {
    return (typeof Promise !== 'undefined')
  }

  const elem = document.createElement('div')
  if (prop in elem.style) {
    return true
  }
  prop = prop.charAt(0).toUpperCase() + prop.slice(1)
  const prefixes = ['Moz', 'Webkit', 'Khtml', 'Ms', 'O']
  for (i = 0; i < prefixes.length; i += 1) {
    if ((prefixes[i] + prop) in elem.style) {
      return true
    }
  }
  return false
}

module.exports = function browserDead(opts) {
  const defaultOpts = {
    background: '#f00',
    color: '#fff',
    supportBreakpoint: 'transform',
    browserDead: 'browser-dead'
  }

  objectAssign(defaultOpts, opts)
  const elem = document.getElementById(defaultOpts.browserDead)
  elem.style.display = 'none'

  if (!isSupported(defaultOpts.supportBreakpoint)) {
    elem.style.backgroundColor = defaultOpts.background
    elem.style.color = defaultOpts.color
    elem.style.display = 'block'
  }
}
