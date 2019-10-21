const taxes = require('./taxes');

function mockProduct(category, imported = false) {
  return ({
    name: 'test-product',
    category: category,
    imported: imported
  });
};

describe('Taxes', () => {
  it('should respect exempt categories', () => {
    const exemptProduct = mockProduct('food');
    expect(taxes.getTaxRate(exemptProduct)).toBe(0);
  });

  it('should have an default tax rate', () => {
    const otherCategoryProduct = mockProduct('other');
    expect(taxes.getTaxRate(otherCategoryProduct)).toBe(0.1);
  });

  it('should add an aditional tax rate to imported items', () => {
    const importedProduct = mockProduct('other', true);
    expect(taxes.getTaxRate(importedProduct)).toBe(0.15);

    const importedProduct = mockProduct('food', true);
    expect(taxes.getTaxRate(importedProduct)).toBe(0.05);
  });

})
