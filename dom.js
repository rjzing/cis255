//document.body.style = "background-color: blue";

//document.getElementById("h1").innerHTML = "this is h1";

var a = document.createElement("a");
var b = document.createTextNode("My Link");
a.setAttribute("href", "#");
a.append(b);
document.body.appendChild(a);

var c = document.createElement("h1");
var d = document.createTextNode("My heading");
c.setAttribute("h1", "h1");
c.append(d);
document.body.appendChild(c);

document.getElementById("h1").onclick = function() {alert(document.URL);}

document.getElementById("input1").onkeyup = function() {

var s = document.getElementById("input1").value;
var result = "";

for(var i = 0; i < s.length; i++){

	result += s[i] + ".";
}	
	document.getElementById("span1").innerHTML = result;
}


