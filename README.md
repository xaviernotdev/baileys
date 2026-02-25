# Baileys WhisykeySocket
<p align='center'>
  <img src="https://files.catbox.moe/0nnopd.jpg" width="500">
</p>

--- 

## Usage
```json
"depencies": {
  "xatabail": "github:zxtabibhl-creator/baileys"
}
```
## Import
```javascript
const {
  default:makeWASocket,
  // Other Options 
} = require('@whiskeysockets/baileys');
```


## Tutorial !
```javascript
const {
  default: makeWASocket,
  fetchLatestWAWebVersion
} = require('@whiskeysockets/baileys');

const client = makeWASocket({
  browser: ['Ubuntu', 'Chrome', '20.00.1'],
  printQRInTerminal: false,
  version: fetchLatestWAWebVersion()
  // Other options
});
