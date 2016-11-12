'use strict';

import angular from 'angular';

export default angular.module('ecommApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
