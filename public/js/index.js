$(function(){
  //inview
  $('.mv-1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv-2');
		}
	});
});
