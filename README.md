# browser-dead

> Identify old and unsupported browsers simple easy way

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

## Usage

```html
<div id="browser-dead">
  Unsupported browser
</div>
```

```javascript
import browserDead from 'browser-dead'

browserDead({
  background: #f00,
  color: #fff,
  supportBreakpoint: 'promise',
  browserDead: 'browser-dead'
})
```
