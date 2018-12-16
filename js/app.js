(function($){
	$(document).on('click', '.toggle', function(){
		let toggle = $(this);
		let selector = $(this).data('info');
		
		if(!$(selector).hasClass('show')){
			$('.circle').removeClass('selected');
			toggle.find('.circle').addClass('selected');
			
			$('.toggleable').fadeOut(function(){
				$(this).removeClass('show');
			})
			$('.toggleable'+selector).fadeIn(function(){
				$(this).addClass('show');
			})
		} 
	})
})(jQuery);