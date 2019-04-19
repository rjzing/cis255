	var clothing = new Array();
	clothing["Shirt"]=15;
	clothing["Jeans"]=35;
	clothing["SweatShirt"]=50;
	clothing["Shorts"]=20;
	
	var addon = new Array();
	addon["ShotGlass"]=3;
	addon["CoffeeMug"]=8;
	addon["Flag"]=5;
 
	function getClothingPrice(){
		var clothingTotal = 0;
		var theForm = document.forms["orderform"];
		var selectedClothing = theForm.elements["clothing"];
		clothingTotal = clothing[selectedClothing.value];
		return clothingTotal;
	}
	
	function getAddOnPrice(){
		var addOnTotal = 0;
		var theForm = document.forms["orderform"];
		var selectedAddOn = theForm.elements["addon"];
		addOnTotal = addon[selectedAddOn.value];
		return addOnTotal;
	}

	function calculateTotal(){
		var divobj = document.getElementById('totalPrice');
		var total = + getClothingPrice() + getAddOnPrice();
		divobj.style.display='block';
		divobj.innerHTML = "Total price for order $" + total;
	}

	function hideTotal(){
		var divobj = document.getElementById('totalPrice');
		divobj.style.display='none';
	}