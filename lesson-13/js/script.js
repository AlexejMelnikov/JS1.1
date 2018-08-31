 $(document).ready(function() {
 	function popupOverlay() {
 		$('.overlay').fadeToggle('slow'); 
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	})
 	};

	$('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function() {
	popupOverlay();
	});
	
	$('.close').on('click', function() {
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	});	
		$('.overlay').fadeToggle('slow'); 
	});

		$('.modal').submit( function(event) {
		event.preventDefault();
		let div = "<div class='results'><div/>";
		$.ajax({
		url: 'server.php',
		      success: function(data) {
		      $('.results').html(data);
  				}
		});
	});
});