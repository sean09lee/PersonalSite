'use strict';

/* Controllers */

var app = angular.module('personalControllers', []);

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

app.controller('generalmillsController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

app.controller('sparkstarterController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});