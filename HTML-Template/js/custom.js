/*-------------------------------------------------------------------------

	Theme Name: Take the Plunge
	
-------------------------------------------------------------------------*/

$(document).ready(function(){
	
	/*vars used throughout*/
	var wh,
		scrollSpeed = 1000,
		parallaxSpeedFactor = 0.6,
		scrollEase ='easeOutExpo',
		targetSection,
		sectionLink = 'a.navigateTo',
	 	section = $('.section');


//INIT --------------------------------------------------------------------------------/
	
	
	if(isMobile == true){

		$('.header').addClass('mobileHeader');	//add mobile header class
	
	
	}else{
		
		$('.page').addClass('desktop');
		$('.parallax').addClass('fixed-desktop');

	}
	
	
//MENU --------------------------------------------------------------------------------/
	
	
	$(".menu a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });

//LAZY LOADING -------------------------------------------------------------------------/
		

  	$(function() {
		
		 if(lazyload==false || isMobile == true) return false;
			 
          $("img.lazy").lazyload({
             placeholder : "images/blank.gif",
             effect : "fadeIn"
          });
		  
     });
	 
	 
	
			
//PARALLAX ----------------------------------------------------------------------------/
	
	
	$(window).bind('load', function() { 
								  
		parallaxInit();						  
		
	});

	function parallaxInit(){
		
		if(isMobile == true) return false;

		$('#parallax-1').parallax();
		$('#parallax-2').parallax();
		$('#parallax-3').parallax();	
		$('#parallax-4').parallax();
		$('#parallax-5').parallax();
		$('#parallax-6').parallax();
		/*add as necessary*/
		
	}
	
	
//HOMEPAGE SPECIFIC -----------------------------------------------------------------/
	
	
	function sliderHeight(){
		
		wh = $(window).height();
		$('#homepage').css({height:wh});
	
	}
	
	sliderHeight();	

	var lH = $('.logo').height();
	var	lW = $('.logo').width();
	
	$('.logo').hover(function() {
		if(isMobile == true) return false;
		$(this).animate({width:lH+50,height:lW+50,marginLeft:-((lH+50)/2),marginTop:-((lW+50)/2)},{queue:false});
	},
	function() {
		if(isMobile == true) return false;
		$(this).animate({width:lH,height:lW,marginLeft:-lH/2,marginTop:-lW/2},{queue:false});
	});
	


		
			
//WINDOW EVENTS ---------------------------------------------------------------------/	
	 
	 
	 $(window).bind('resize',function() {
		
		//Update slider height
	 	sliderHeight();
		
	});	
});


	