const taxes = require('../taxes/taxes');

const EMPTY_TOTAL = { total: 0, taxes: 0 };

function _totalString({ taxes, total }) {
  return `Sales Taxes: ${taxes.toFixed(2)}\nTotal: ${total.toFixed(2)}`
}

function _productString(item) {
  const price = ((item.price * item.qty) + taxes.getTaxes(item)).toFixed(2);
  return `${item.qty} ${item.name}: ${price}`;
}

function _itemsString(items) {
  return items.reduce((str, item) => (`${str}${_productString(item)}\n`), '');
}

function _calculateTotal(items) {
  return items.reduce((value, item) => {
    const productTotal = item.price * item.qty;
    const productTaxes = item.qty * taxes.getTaxes(item);

    return ({
      total: +(value.total + productTaxes + productTotal).toFixed(2),
      taxes: +(value.taxes + productTaxes).toFixed(2)
    });
  }, EMPTY_TOTAL);
}

function getReceipt(cartItems) {
  if (!cartItems.length) return _totalString(0, 0);

  const total = _calculateTotal(cartItems);
  return `${_itemsString(cartItems)}\n${_totalString(total)}`
}

module.exports = {
  getReceipt,
  _totalString,
  _productString,
  _itemsString,
  _calculateTotal
}
