var app = angular
    .module("Demo", ["ui.router"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates1/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "Templates1/courses.html",
                controller: "coursesController"
            })
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
