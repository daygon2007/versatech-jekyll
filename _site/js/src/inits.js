  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-20227598-9', 'auto');
  ga('send', 'pageview');
			
			
jQuery( document ).ready(function( $ ) {
   new WOW().init();
   
   $('#ls-content > .ls-form-group:nth-child(1), #ls-content > .ls-form-group:nth-child(2), #ls-content > .ls-form-group:nth-child(3), #ls-content > .ls-form-group:nth-child(4), #ls-content > .ls-form-group:nth-child(5), #ls-content > .ls-form-group:nth-child(6), .ls-form-group:nth-child(5)').addClass('col-md-4');
   $('#ls-content > .ls-form-group:nth-child(6)').after('<div class="clear"></div>');
   if (screen.width > 768) {
   $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn();
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut();
                $(this).toggleClass('open');				
			});
			
   } else if (screen.width < 768) {
	   $('.dropdown > a').attr({'href': '#', 'data-toggle':'dropdown'});
   }
   $(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i>Back to Top</div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
});

	_stq = window._stq || [];
	_stq.push([ 'view', {v:'ext',j:'1:3.7.2',blog:'95129117',post:'163',tz:'-6',srv:'www.versatechmarketing.com'} ]);
	_stq.push([ 'clickTrackerInit', '95129117', '163' ]);