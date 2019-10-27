'use strict';

const billing = require('./src/billing/billing');

if (process.argv.length < 2) {
  return console.log(`
    Please provide an input json:
    e.g. node src/app.js ./examples/input1.json
  `);
}

const filePath = process.argv.splice(2);
const input = require(filePath[0]) || [];
const receipt  = billing.getReceipt(input);

console.log(`
------------------------
billing.js
------------------------
${receipt}
------------------------
`);
