var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    console.log('ControllerName in use');

    $routeProvider.when('/addRiddle', {
        templateUrl: 'views/addRiddle.html',
        controller: 'AddRiddleController as arc'
    }).when('/viewRiddle', {
        templateUrl: 'views/viewRiddle.html',
        controller: 'ViewRiddleController as vrc'
    }).otherwise('/addRiddle');
});