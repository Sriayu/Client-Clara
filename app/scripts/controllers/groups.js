'use strict';

/**
 * @ngdoc function
 * @name helpMeGodApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the helpMeGodApp
 */
angular.module('helpMeGodApp')
  .controller('GroupsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
