// create the module and name it app
    // also include ngRoute for all our routing needs
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'pages/partials/home.html',
        })

        // route for the problems
        .when('/problems/:route', {
            templateUrl: 'pages/partials/problems.html',
            controller  : 'mainController'
        })
});

//expose $location in $rootScope
app.run(function($rootScope, $location) {
    $rootScope.location = $location;
});

// create the controller and inject Angular's $scope
app.controller('mainController', ['$scope', '$location', 'Descriptions', function($scope, $location, Descriptions) {
    var problemName = $location.path().split('/').pop();
    $scope.name = problemName;
    $scope.desc = Descriptions[problemName];
}]);

app.factory('Descriptions', function($http) {
    return {
      addition: "Create an addition function that returns the sum of the two arguments",
      isPrime: "Create a function that returns true if a number is prime and false if it is not",
      spiralTraversal: "Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),\n and prints out every value found, but in a spiral from the upper left in to the center.",
      allAnagrams: "Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array."
    }
});
