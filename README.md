# browser-dead

> Inform users that their browser is unsupported by your website

## Installation

### as node module

```shell
npm i --save browser-dead
```

### as browser script

Download [browser-dead.min.js](https://raw.githubusercontent.com/techgaun/browser-dead/master/dist/browser-dead.min.js) and place it in appropriate directory of your choice.

```shell
wget "https://raw.githubusercontent.com/techgaun/browser-dead/master/dist/browser-dead.min.js" -O browser-dead.min.js
```

Include the script in your html:

```html
<script src="/path/to/browser-dead.min.js" charset="utf-8"></script>
```

Download [browser-dead.min.css](https://raw.githubusercontent.com/techgaun/browser-dead/master/dist/css/browser-dead.min.css) and place it in appropriate directory of your choice.

```shell
wget https://raw.githubusercontent.com/techgaun/browser-dead/master/dist/css/browser-dead.min.css -O browser-dead.min.css
```

Include the stylesheet in your html:

```html
<link rel="stylesheet" href="/path/to/browser-dead.min.css" media="screen">
```

## Usage

Add a html element with content inside it as you wish.

```html
<div id="browser-dead">
  Unsupported browser
</div>
```

If using the node module, in your source files, import the `browser-dead` module and then initialize as below:

```javascript
import browserDead from 'browser-dead'

browserDead({
  background: #f00,
  color: #fff,
  supportBreakpoint: 'promise',
  browserDead: 'browser-dead'
})
```

If directly using in html, place the initialization code right below the script tag:

```html
<script src="/path/to/browser-dead.min.js" charset="utf-8"></script>
<script type="text/javascript">
  browserDead({
    background: #f00,
    color: #fff,
    supportBreakpoint: 'promise',
    browserDead: 'browser-dead'
  })
</script>
```

## Support Breakpoint

Refer to [caniuse.com](http://caniuse.com) to know what support breakpoint can you use for your scenario. Below are some of the common ones that you can use as breakpoints to not support your choices of browsers:

- `promise` (<= IE11) - [Promise check](http://caniuse.com/#search=promise) is a special implementation in browser-dead which is useful for detecting IE11 properly if you do not wish to support IE11 and below.
- `transform` (<= IE8) - [CSS transform](http://caniuse.com/#search=transform)
- `borderImage` (<= IE10) - [CSS Border Image](http://caniuse.com/#search=border)
- `borderSpacing` (<= IE7) - [CSS Border Spacing](https://msdn.microsoft.com/en-us/library/cc304069(v=vs.85).aspx)
