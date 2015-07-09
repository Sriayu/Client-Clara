'use strict';

/**
 * @ngdoc function
 * @name helpMeGodApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the helpMeGodApp
 */
angular.module('helpMeGodApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
