$(document).ready(function(){
	$('.post').click(function(e){
		e.preventDefault();
		
		var $post = $(e.target).closest('.post');
		
		$post.addClass('active');
		
		$post.animate({height : ($(window).height())});
		
		$('body').addClass('no-scroll');
		$('body').bind('touchmove', function(e){e.preventDefault()}) // for mobile
		
		$('body').animate({scrollTop: $post.offset().top});
		
		$('#closeButton').show();
		
	});
	
	$('#closeButton').click(function(e){
	
		e.preventDefault();
		
		var $post = $('.post.active');
		
		$post.removeClass('active');
		
		$post.animate({height : 200});
		
		$('body').removeClass('no-scroll');
		$('body').unbind('touchmove');
		
		$('#closeButton').hide();
	});
});