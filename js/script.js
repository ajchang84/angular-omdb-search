var app = angular.module('MovieSearchApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "../partials/home.html"
    })
    .when('/:id', {
      templateUrl: "../partials/show.html",
      controller: "ShowController"
    })



  $locationProvider.html5Mode(true);
})