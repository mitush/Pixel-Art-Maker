// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#inp_submit').click(function(e){
	e.preventDefault();
	makeGrid();
});
function makeGrid() {
var r = $('#inputHeight').val();
console.log(r);
var c = $('#inputWeight').val();
var tab = $('#pixelCanvas');
tab.html("");
//alert("inside func");
for(var i=0 ; i<r ; i++)
{	  
	// row = tab.insertRow(i);
	var row = $("<tr>");
	//alert("inside func1");
	for(var j=0 ; j<c ; j++){
		// cell = row.insertCell(j);
		row.append($("<td>"));
	}
	tab.append(row);
}

}
