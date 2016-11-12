'use strict';

describe('Component: ProductComponent', function() {
  // load the controller's module
  beforeEach(module('angtestApp.product'));

  var ProductComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProductComponent = $componentController('product', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
