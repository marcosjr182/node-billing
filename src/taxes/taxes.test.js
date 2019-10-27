const taxes = require('./taxes');

function mockProduct(category, imported = false, price = 2.2) {
  return ({
    name: 'test-product',
    category: category,
    imported: imported,
    price: price
  });
};

describe('Taxes', () => {
  it('should respect exempt categories', () => {
    const exemptProduct = mockProduct('food');
    expect(taxes._taxRate(exemptProduct)).toBe(0);
  });

  it('should have an default tax rate', () => {
    const otherCategoryProduct = mockProduct('other');
    expect(taxes._taxRate(otherCategoryProduct)).toBe(0.1);
  });

  it('should add an aditional tax rate to imported items', () => {
    const importedProduct = mockProduct('other', true);
    expect(taxes._taxRate(importedProduct)).toBe(0.15);

    const importedExemptProduct = mockProduct('food', true);
    expect(taxes._taxRate(importedExemptProduct)).toBe(0.05);
  });

  it('should calcullate the taxes value', () => {
    const exemptProduct = mockProduct('food', false, 2.2);
    expect(taxes.getTaxes(exemptProduct)).toBe(0);

    const otherProduct = mockProduct('other', false, 2.2);
    expect(taxes.getTaxes(otherProduct)).toBe(0.22);
  });

})
