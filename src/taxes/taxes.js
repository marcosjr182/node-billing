const taxesDB = {
  'food': 0,
  'books': 0,
  'medical': 0
}

function getTaxRate(product) {
  const baseTax = (taxesDB[product.category] || 0.1);
  const importTax = (product.imported) ? 0.05 : 0;
  return baseTax + importTax;
}

module.exports = {
  getTaxRate
}
