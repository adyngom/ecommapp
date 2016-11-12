'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './product.routes';

export class ProductComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('angtestApp.product', [uiRouter])
  .config(routes)
  .component('product', {
    template: require('./product.html'),
    controller: ProductComponent,
    controllerAs: 'productCtrl'
  })
  .name;
