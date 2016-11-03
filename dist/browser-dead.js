function isSupported(prop) {
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
  for (const prefix of prefixes) {
    if (`${prefix}${prop}` in elem.style) {
      return true
    }
  }
  return false
}

export default function browserDead(opts) {
  const defaultOpts = {
    background: '#f00',
    color: '#fff',
    supportBreakpoint: 'transform',
    browserDead: 'browser_dead'
  }

  opts = Object.assign({}, defaultOpts, opts)

  // let elem = document.getElementById(opts.browserDead)

  if (!isSupported(opts.supportBreakpoint)) {
    // show an overlay
  }
}
