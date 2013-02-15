$(document).ready(function(){
	$('.post').click(function(e){
		e.preventDefault();
		
		$('#overlay').addClass('active');
		
		$('body').addClass('no-scroll');
		$('body').bind('touchmove', function(e){e.preventDefault()}) // for mobile
		
		$('#closeButton').show();
		
		var postURL = $(e.target).closest('.post-url').attr('href');
		
		$('#overlay').load(postURL + " #singlePost");
		
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