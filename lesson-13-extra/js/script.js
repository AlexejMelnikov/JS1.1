 $(document).ready(function() {

	$('.main_btn').on('click', function() {
		$('.overlay').fadeToggle('slow'); 
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	})
	});
	$('.main_btna').on('click', function() {
		$('.overlay').fadeToggle('slow'); 
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	});
	});	
	$("a[href='#sheldure']").on('click',function() {
		// console.log('HI');
		$('.overlay').fadeToggle('slow'); 
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	});	
	});		
	
	$('.close').on('click', function() {
		$('.modal').animate({
		opacity: 'toggle',
		height: 'toggle'
	});	
		$('.overlay').fadeToggle('slow'); 
	});

	
	
	let btn = $('button').eq(1);
	btn.on('click', function(event) {
		event.preventDefault();
		// console.log('NORM');
		let div = '<div class="results"><div/>';
		
		console.log(div);

		$('.modal').append(div);
		$.ajax({

		url: 'server.php?action=sample1',

		  success: function(data) {
		 		// console.log('norm'); 	
    	$('.results').html(data);

  				}
	});

		 

});

	
});