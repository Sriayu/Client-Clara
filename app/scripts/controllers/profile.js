'use strict';

/**
 * @ngdoc function
 * @name helpMeGodApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the helpMeGodApp
 */
angular.module('helpMeGodApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
