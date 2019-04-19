var app5 = angular.module('app5', []);

app5.controller('userCtrl', function($scope) {

  $scope.user= [{
    fName: "Robert",
    lName: "Zinger",
    phone: "(555)555-5555",
    email: "xxx@xxx.com",
    city: "University Center",
	state: "MI",
	zip: "48710"
  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, phone: userInfo.phone, email: userInfo.email, city: userInfo.city, state: userInfo.state, zip: userInfo.zip
      });;
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }
  $scope.getLocation = function (userInfo){
	zipcodes = [{"zip": "48710", "city": "University Center", "state": "MI"},
	 {"zip": "48103", "city": "Ann Arbor", "state": "MI"}, 
	 {"zip": "48138", "city": "Grosse Ile", "state": "MI"},
	 {"zip": "48197", "city": "Ypsilanti", "state": "MI"},
	 {"zip": "48397", "city": "Warren", "state": "MI"}]
	 
	num = userInfo.zip;
	console.log(num);
	city = document.getElementsByName("city");
	state = document.getElementsByName("state");
	console.log(city.num);
	console.log(state.num);	
	if(num == "48710") {
		userInfo.city = zipcodes[0].city;
		userInfo.state = zipcodes[0].state;		
	} else if(num == "48103"){
		userInfo.city = zipcodes[1].city;
		userInfo.state = zipcodes[1].state;
	} else if(num == "48138") {
		userInfo.city = zipcodes[2].city;
		userInfo.state = zipcodes[2].state;
	}else if(num == "48197"){
		userInfo.city = zipcodes[3].city;
		userInfo.state = zipcodes[3].state;
	}else if(num == "48397"){
		userInfo.city = zipcodes[4].city;
		userInfo.state = zipcodes[4].state;
	}
	else {
		userInfo.city = "Invalid Zipcode";
		userInfo.state = "Invalid Zipcode";
	}
 }

});