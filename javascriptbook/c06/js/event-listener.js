function checkUsername() {
  var checks = [['A', 'C'], ['D', 'H'], ['I', 'M'], ['N', 'P'], ['Q', 'Z']];

  var userNum = this.id.substr(this.id.length - 1);
  var userId = document.getElementById('feedback' + userNum);
  var makeBig = this.value[0].toUpperCase();
  var letterCheck = makeBig.charCodeAt(0);
  
  if (letterCheck >= checks[Number(userNum) - 1][0].charCodeAt(0) && 
		letterCheck <= checks[Number(userNum) - 1][1].charCodeAt(0)) 
	{           
		userId.textContent = 'Yep, your username starts with ' + makeBig;;
	}
	
  else {
    userId.textContent = 'Nope, your username cannot start with ' + makeBig;;          
	}
}

var user1 = document.getElementById('username1');
var user2 = document.getElementById('username2');
var user3 = document.getElementById('username3');
var user4 = document.getElementById('username4');
var user5 = document.getElementById('username5');

user1.addEventListener('blur', checkUsername, false);
user2.addEventListener('blur', checkUsername, false);
user3.addEventListener('blur', checkUsername, false);
user4.addEventListener('blur', checkUsername, false);
user5.addEventListener('blur', checkUsername, false);