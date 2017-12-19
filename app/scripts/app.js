'use strict';

/**
 * @ngdoc overview
 * @name biblioredesUiApp
 * @description
 * # biblioredesUiApp
 *
 * Main module of the application.
 */
angular
  .module('biblioredesUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login',{
        templateUrl:'views/login.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/recintos',{
        templateUrl:'views/recintos.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
