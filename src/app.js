'use strict';

const fs = require('fs');
// const billing = require('./billing/billing');

if (process.argv.length < 2) {
  return console.log(`
    Please provide an input json:
    e.g. node src/app.js ./examples/input1.json
  `);
}

const filePath = process.argv.splice(2);
//const receipt  = billing.getReceipt(filePath)

console.log(`
------------------------
billing.js
------------------------
------------------------
`);
