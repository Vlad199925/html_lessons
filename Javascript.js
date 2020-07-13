//var cell = document.getElementsByTagName("td");
function changeColor (row)
{ 
	var r = row.getElementsByTagName("td");
	console.log(r);
	// row.style.backgroundColor = "red";
		for (var i = 0; i < r.length; i++) {
			r[i].style.backgroundColor = "red";

		}
}
 
	//  for (var i = 0; i < cell.length; i++) {
	// 	cell[i].onclick = function (easy) {
	// 		easy.target.style.background = "lime";
	// 	}
	// }

 // window.onload = changeColor(r); 
// смена цветов с заданного на цвет по умолчанию.