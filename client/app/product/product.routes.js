'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('product', {
      url: '/product',
      template: '<product></product>'
    });
}
