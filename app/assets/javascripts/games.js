var games = (function($){
  var init = function(){
    console.log('init');
    addListeners();


  };

  var addListeners = function(){
    $('#photo').click(function(e){
      console.log('on click');
      targeting(e);
      $('form').css({left:  e.pageX-50, top:  e.pageY-50});
    });
  };

  var targeting = function(e){
    console.log('inside target fun');
    $('#photo').append('<div class="tag" id="last"></div>');
    $('#last').css({left:  e.pageX-50, top:  e.pageY-50});
    // $('#last').removeAttr("id");
    var character_id = $('form select').val();
    createTag(e.pageX-50, e.pageY-50, character_id);
  };

  var createTag = function(x, y, char_id){
    var destination = '/tags';
    $.ajax({
        type: 'POST',
        url: destination,
        data: {tag: {tag_x: x, tag_y: y, character_id: char_id}},
        dataType: 'json',
        success: function(json){
          // updateTag(json);
          console.log('create tag success');
          $('#last').removeAttr("id");
        },
        failure: function(){
          console.log('failed to create tag');
          $('#last').remove();
        },
        complete: function(){
          console.log('createTag complete');
          // $('#last').removeAttr("id");
        }
      });
  };

  // var updateTag = function(json)


  return {
    init: init
  };
})($);

$(document).ready(function(){
  console.log('page ready');
  games.init();}
 );




