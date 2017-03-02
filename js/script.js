$(document).ready(function(){

 $(".flex-container").on('mousemove',function(e){
      e.stopPropagation();

      var el = $(this);
      var w = el.outerWidth();
      var h = el.outerHeight();
      var x = e.pageX;
      var y = e.pageY;
      var xPercent = x / w;
      var yPercent = y / h;

      var move = 40;
      var xMove = Math.round(xPercent * move - (move / 2));
      var yMove = Math.round(yPercent * move - (move / 2));

      $('.flex-items h1').css({
          'text-shadow' : xMove + 'px '+yMove+'px 0px rgba(0,0,0, 0.17)'
      });
    });


}); /* End of Ready Function */
