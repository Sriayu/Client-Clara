'use strict';

/**
 * @ngdoc function
 * @name helpMeGodApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the helpMeGodApp
 */
angular.module('helpMeGodApp')
  .controller('ArticleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
