'use strict';

/**
 * @ngdoc function
 * @name helpMeGodApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the helpMeGodApp
 */
angular.module('helpMeGodApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
