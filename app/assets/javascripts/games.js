var games = (function($){
  var init = function(){
    console.log('init');
    addListeners();
    var character_id = 0
    var coord_x=0
    var coord_y=0
  };

  var addListeners = function(){
    $('#photo').click(function(e){
      console.log('on click');
      targeting(e);
      
    $('option').click(function(e){
      
      character_id = e.target.innerHTML()
      console.log("Character_id" +character_id)
      //$('form select').val();
    })

    $('input[type=submit]').click(function(e){
      e.preventDefault();
      console.log(coord_x,coord_y)
      createTag(coord_x, coord_y, character_id);
    })
    });
  };

  var targeting = function(e){
    console.log('inside target fun');
    $('#photo').append('<div class="tag" id="last"></div>');
    coord_x = e.pageX-50
    coord_y = e.pageY-50
    $('#last').css({left:  coord_x, top:  coord_y});
    $('form').css({left:  coord_x, top:  coord_y});
    // $('#last').removeAttr("id");
  };


  var createTag = function(x, y, char_id){
    var destination = '/tags';
    $.ajax({
        type: 'POST',
        url: destination,
        data: {tag: {tag_x: x, tag_y: y, character_id: char_id}},
        dataType: 'json',
        success: function(){
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




