'use strict';

/**
 * @ngdoc function
 * @name helpMeGodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helpMeGodApp
 */
angular.module('helpMeGodApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
