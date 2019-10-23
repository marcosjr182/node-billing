const billing = require('./billing');

function mockProduct(qty, name, price) {
  return ({
    qty: qty,
    name: name,
    category: 'other',
    price: price
  });
};

describe('Billing', () => {
  it('should convert product to string', () => {
    const oneApple = mockProduct(1, 'apple', 2.2);
    expect(billing._productString(oneApple)).toBe('1 apple: 2.20');

    const threeApples = mockProduct(3, 'apple', 2.2);
    expect(billing._productString(threeApples)).toBe('3 apple: 6.60');
  });

  it('should convert totals to string', () => {
    expect(billing._totalString({ taxes: 1.3, total: 45.4 }))
      .toBe('Sales Taxes: 1.30\nTotal: 45.40');
  });

  it('should convert a list of products to string', () => {
    const products = [
      mockProduct(2, 'apple', 2.2),
      mockProduct(1, 'pineapple', 5.26)
    ];

    expect(billing._itemsString(products))
      .toBe('2 apple: 4.40\n1 pineapple: 5.26\n');
  });

})
