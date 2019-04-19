// ---------- AJAX CALL ----------
var req = new XMLHttpRequest(); // create an ajax request
var url = 'https://api.svsu.edu/courses?prefix=ACCT&term=17/FA'//'https://api.svsu.edu/courses?' // // //'https://api.svsu.edu/courses?prefix=CS&term=17/FA';    //https://api.svsu.edu/courses?
req.onreadystatechange = function() {
	var readyStateDone = 4;
	var readyStatusSuccess = 200;
	if (this.readyState == readyStateDone && 
		this.status == readyStatusSuccess) {
		jsonObj = JSON.parse(this.responseText);
	}
};
req.open('GET', url, true);
req.send();

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
   // alert("woke up!");
}
sleep(10000000) * sleep(10000000); // * sleep(10000000) * sleep(10000000) * sleep(10000000) ; 


/**
$.getJSON("courses.json", function(json){
	console.log("complete")
	}); */
	//var fs;
//var courses = fs.readFileSync("json/courses.txt").toString('utf-8);

var app4 = angular.module('app4', []);
//var coursePre = element(by.exactBinding('coursePre'));

        //$.get('json/courses.txt', function(courses){
            //var courses = data.split(',');
            //console.log(courses);
        //});

//var j = [111, 3, 5, 7, 9];
//var q = 111;
var q;
app4.controller('eventCtrl', ['$scope', function ($scope) {
	


	$scope.courses = jsonObj.courses;
	//$scope.courses.q{};
	//$scope.courseNumber = jsonObj.courseNumber;
	console.log("hello");
	console.log($scope.courses);
	//console.log($scope.courses[4].courseNumber);
	
	for(var i = 1; i < $scope.courses.length - 1; i++){
		console.log($scope.courses[i].courseNumber)
		if($scope.courses[i].courseNumber % 2 == 0){
			//var k = "true";
			q = true;
			console.log(q);
			//$scope.q[i] = "true";
			//console.log($scope.courses.q)
		}else{
			q = false;
			console.log(q)
			//$scope.q[i] = "false";
			//console.log($scope.courses.q)
		} 
	}	
	
$scope.ready = function(){
	console.log($scope.coursePre);
}
	}]);