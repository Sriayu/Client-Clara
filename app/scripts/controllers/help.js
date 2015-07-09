'use strict';

/**
 * @ngdoc function
 * @name helpMeGodApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the helpMeGodApp
 */
angular.module('helpMeGodApp')
  .controller('HelpCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
