 $(document).ready(function() {
 	function popupOverlay() {
 		$('.overlay').fadeToggle('slow'); 
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	})
 	};

	$('.main_title, .main_btn').on('click', function() {
		popupOverlay();
	});
	$('.main_title, .main_btna').on('click', function() {
		popupOverlay();
	});	
	$("a[href='#sheldure']").on('click',function() {
		popupOverlay();
	});		
	
	$('.close').on('click', function() {
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	});	
		$('.overlay').fadeToggle('slow'); 
	});

	
// 	форма должна отправляться, $('.наша форма').submit(function() {--})
// и далее используешь ajax в функции type, url, data, success
		$('.modal').submit( function(event) {
		event.preventDefault();
		let div = '<div class="results"><div/>';
		this.append(div);
		$.ajax({

		url: 'server.php?action=sample1',

		  success: function(data) {
		 		// console.log('norm'); 	
    	$('.results').html(data);

  				}
	});

		 

});

	
});