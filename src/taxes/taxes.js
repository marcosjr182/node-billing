const taxes = require('./taxes.json');

function categoryTaxes(category) {
  return (taxes.hasOwnProperty(category))
    ? taxes[category]
    : taxes['other'];
}

function _taxRate(product) {
  const baseTax = categoryTaxes(product.category);
  const importTax = (product.imported) ? 0.05 : 0;
  return +(baseTax + importTax).toFixed(2);
}

function getTaxes(product) {
  const rate = _taxRate(product);
  return +(rate * product.price).toFixed(2);
}

module.exports = {
  _taxRate,
  getTaxes
}
