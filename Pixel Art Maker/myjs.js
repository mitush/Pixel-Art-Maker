$('#btn').click(function(){
	var r= $('#row').val();
	var c= $('#col').val();
	// console.log(r);
	$('.container').html("");
	for (var i=0 ; i < r ; i++) {
		//$('.container').append('<div>');
		for (var j=0 ; j < c ; j++){
			$('.container').append('<div class=\"small_box\" id=\"'+i+'_'+j+'\">'+0+'</div>');
		}
		$('.container').append('<br>');
	}
});
