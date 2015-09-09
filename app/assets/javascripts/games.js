var games = (function($){
  var init = function(){
    console.log('init');
    $('#photo').click(function(e){
      console.log('on click');
      targeting(e);
    });
  };

  var targeting = function(e){
    console.log('inside target fun');
    $('#photo').append('<div class="tag" id="last"></div>');
    $('#last').css({left:  e.pageX, top:  e.pageY});
    $('#last').removeAttr("id");
  };


  return {
    init: init
  };
})($);

$(document).ready(function(){
  console.log('page ready');
  games.init();}
 );




