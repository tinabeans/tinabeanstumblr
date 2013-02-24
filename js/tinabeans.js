$(document).ready(function(){
	var headerScrollPercent;
	var targetPos = $('#masthead').outerHeight() - $('.nav_container').outerHeight();
	
	var logoTargetPos = 0;
	var logoStartPos = $('.logo').position().top;
	
	var mastheadContentTargetPos = 60;
	var mastheadContentStartPos = 0;
	
	
	var calculateBodyHeight = function(){
		$('body').css({minHeight : $(window).height() + targetPos});
	};
	
	// set minimum body height to allow header to scroll to final position
	calculateBodyHeight();
	
	$(window).resize(calculateBodyHeight);
	

	$('.post').click(function(e){
		e.preventDefault();
		
		$('#overlay').addClass('active');
		
		$('body').addClass('no-scroll');
		$('body').bind('touchmove', function(e){e.preventDefault()}) // for mobile
		
		$('#closeButton').show();
		
		var postURL = $(e.target).closest('.post-url').attr('href');
		
		$('#overlay').append('<iframe frameBorder="0" src="' + postURL + '"></iframe>');
	});
	
	$('#closeButton').click(function(e){
	
		e.preventDefault();
		
		$('#overlay').removeClass('active');
		var timer = window.setTimeout(function(){$('#overlay').empty();}, 500);
		
		$('body').removeClass('no-scroll');
		$('body').unbind('touchmove') // for mobile
		
		$('#closeButton').hide();
	});
	
	// calculate % fade of header
	$(window).scroll(function(e){
		var scrollPos = $(document).scrollTop();
		headerScrollPercent = scrollPos / targetPos;
		
		// move the masthead
		if (headerScrollPercent >= 1) {
			$('#masthead').addClass('fixed');
			$('#masthead').css({'top' : -targetPos});
		}
		else {
			$('#masthead').removeClass('fixed');
			
			if (scrollPos > 0){
				$('#masthead').css({'top' : -scrollPos});
			}
			else {
				$('#masthead').css({'top' : 0});
			}
		}
		
		// move the logo
		var logoPos = logoStartPos * (1-headerScrollPercent);
		
		if (logoPos >= logoTargetPos) {
			$('.logo').css({top : logoPos});
		}
		else {
			$('.logo').css({top : logoTargetPos});
		}
		
		// move and fade the masthead content
		
		
		var mastheadContentPos = $('.masthead_content').position().top;
		
		var moveDistance = (mastheadContentTargetPos - mastheadContentStartPos) * headerScrollPercent;
		
		console.log(moveDistance);
		
		$('.masthead_content').css({opacity : 1-headerScrollPercent});
	});
});