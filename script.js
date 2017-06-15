// Code goes here

//(function () {
//    angular
//        .module("appName", []).controller("MainController", MainController);
//    MainController.$inject = ["$scope"];

//    function MainController($scope) {
//        var person = {
//            firstName: "Scott",
//            lastName: "Allen",
//            imageSrc: "http://odetocode.com/Images/scott_allen_2.jpg"
//        };

//        $scope.person = person;
//        $scope.message = "Hello, Angular!";

//    };
//})();

//Older Angular
// Code goes here

var MainController = function($scope){
    var person = {
        firstName: "Scott",
        lastName: "Allen",
        imageSrc: "http://odetocode.com/Images/scott_allen_2.jpg"
    };


    $scope.message = "Hello, Angular!";
    $scope.person = person;

};