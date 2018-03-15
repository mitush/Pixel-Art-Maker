$('#btn').click(function(){
	var r= $('#row').val();
	var c= $('#col').val();
	console.log(r);
	for (var i=0 ; i < r ; i++) {
		for (var j=0 ; j < c ; j++){
			//alert("inside");
			$('.big_box').append('<div class=\"small_box\" id=\"'+i+'_'+j+'\">'+i+'</div>');
		}
		$('.big_box').append('<br>');
	}
});
