'use strict';

/**
 * @ngdoc overview
 * @name helpMeGodApp
 * @description
 * # helpMeGodApp
 *
 * Main module of the application.
 */
angular
  .module('helpMeGodApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .when('/roles', {
        templateUrl: 'views/roles.html',
        controller: 'RolesCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/article', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .when('/service_try', {
        templateUrl: 'views/service_try.html',
        controller: 'ServiceTryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
