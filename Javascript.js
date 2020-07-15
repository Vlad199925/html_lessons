//var cell = document.getElementsByTagName("td");
function changeColor ()
{ 
	var r = document.getElementsByTagName("tr");
	console.log(r);
	for (var i = 0; i<r.length; i++) {
		r[i].style.backgroundColor = "red";
	
		}	
	if (r.style.backgroundColor == '#ff0000') {
		return r.style.backgroundColor = '#0000ff';
	}
}
function change ()
{ 
	var back = "#ececf4";
	var r = document.getElementById("4");
	console.log(r);
	r.style.background = "#BC8F8F";

 	var r = document.getElementById("3");
	console.log(r);
	r.style.background = "#C0C0C0";

	var r = document.getElementById("2");
	console.log(r);
	r.style.background = "#BC8F8F";

	var r = document.getElementById("1");
	console.log(r);
	r.style.background = "#C0C0C0";
	
	}


	