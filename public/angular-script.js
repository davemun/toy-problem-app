// create the module and name it app
    // also include ngRoute for all our routing needs
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the addition toy problem
        .when('/addition', {
            templateUrl : 'pages/partials/addTest.html',
            controller  : 'addTestController'
        })

        // route for the addition toy problem
        .when('/primeTester', {
            templateUrl : 'pages/partials/addTest.html',
            controller  : 'addTestController'
        })

        // route for the addition toy problem
        .when('/spiralTraversal', {
            templateUrl : 'pages/partials/addTest.html',
            controller  : 'addTestController'
        })

        // route for the addition toy problem
        .when('/allAnagrams', {
            templateUrl : 'pages/partials/addTest.html',
            controller  : 'addTestController'
        })

});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('addTestController', function($scope) {
    $scope.message = 'This is the addTest page.';
});
