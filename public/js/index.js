$(function(){
  //inview
  $('.mv_1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv_2');
		}
	});
});
