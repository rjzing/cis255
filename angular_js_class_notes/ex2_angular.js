var app2 = angular.module('app2', []);

 
// Define multiple controllers
app2.controller('ranCourse', function($scope) {
  var courses = ["Computer Info Systems", "Computer Science", "Law", "Poly-Sci", "Math", "Communications"];
 
  $scope.course = courses[Math.floor((Math.random() * 6))];
});
 
app2.controller('ranCourse2', function($scope) {
  var courses = ["Econ", "Stats", "Chem", "Bio", "Accounting"];
 
  $scope.course = courses[Math.floor((Math.random() * 4))];
});