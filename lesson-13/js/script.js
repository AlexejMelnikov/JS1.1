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

	console.log($("a[href^='http://w3pro.ru']"));
	
});