 $(document).ready(function() {
			  $(window).load(function() {
			  	$(".loader").fadeOut("slow");
			  });
			  
			  $(window).scroll(function(){
						  
		if($(this).scrollTop()>190){
		$('nav').addClass('fixed');	
			
		}
		else{
		$('nav').removeClass('fixed');	
			
	}
						  
						  
						  });
						  
	/***********************************/
	

   
     
      $("#owl-product").owlCarousel({
        nav: true,
   /* navigationText: [
        "<i class='icon-chevron-left'></i>",
        "<i class='icon-chevron-right'></i>"],*/
		 navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		items : 4, 
      });
     
  

					  
						  
	/*********************************/
	/*$(".st-feature-icon").hover(function(){
    $(this).addClass('animated shake ' + $(this).data('action'));
});
$(".st-feature-icon").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    $(this).removeClass('animated shake ' + $(this).data('action'));
});	
		 });*/


	
     
 
 
 $(".st-feature").hover(function(){							 
    $(this).children(".st-feature-icon").addClass('animated shake' );

});
$(".st-feature").bind("animationend",function(){
    $(this).children(".st-feature-icon").removeClass('animated shake');
});	
		 });
 
 
 
 $(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.gov, .tour, .eticket'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});

 new WOW().init();
