var games = (function($){
  var init = function(){
    $('#photo').click(function(e){
      console.log('on click');
      targeting(e);
    });
  };

  var targeting = function(e){
    console.log('inside target fun');
    $('#photo').append('<dieting = function(e){v class="tag" id="target-box"></div>');
    $('#target-box').css({left:  e.pageX, top:  e.pageY});
  };


  return {
    init: init
  };
})($);

// $(document).ready(function(){
  console.log('page ready');
  games.init();
// );




