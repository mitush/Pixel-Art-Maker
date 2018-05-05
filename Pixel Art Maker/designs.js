// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#inp_submit').click(function(e){
	e.preventDefault();
	makeGrid();
});
function makeGrid() {
var r = $('#inputHeight').val();
var c = $('#inputWeight').val();
var tab = $('#pixelCanvas');
var color = $('#colorPicker');
console.log(color.val());
tab.html("");
//alert("inside func");
for(var i=0 ; i<r ; i++)
{	  
	// row = tab.insertRow(i);
	var row = $("<tr>");
	tab.append(row);
	//alert("inside func1");
	for(var j=0 ; j<c ; j++){
		// cell = row.insertCell(j);
		row.append($("<td>"));
		$('td').attr("class","cell");
	}
	tab.append(row);
}
// alert("inside functest");
$('.cell').click(function (event){
	var c = color.val();
	//alert("INside2");
	console.log('color is '+c);
	$(event.target).css('background-color',c);
});

}
