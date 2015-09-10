var games = (function($){
  var init = function(){
    var score = 60*60*60
    var total = 0
    var character_id = 0;
    var coord_x=0;
    var coord_y=0;
    getTags();

    var timer = setInterval(function(){
      score-=1
      $('#score').text("Score: " + score)
    }, 1000)
    

  };


  var getTags= function(){
    console.log('getting tag');
    $.ajax({
    type: 'GET',
    url: '/tags',
    dataType: 'json',
    success: function(json){
      displayTags(json);
      addListeners();
    },

    error: function(){
      console.log('ajax getTag failed ');

    },
    complete: function(){
      
      console.log('ajax getTag complete');

    }
  });

  };

  var displayTags = function(json){
    var characters = json.characters;

     for(var i=0; i<json.tags.length; i++){
      var tag = json.tags[i];

      $('#photo').append('<div id='+tag.id+' class="tag"></div>');
      $('#'+tag.id).css({left:  tag.tag_x, top:  tag.tag_y}).html(characters[tag.character_id]+'<br><a href="#" class="delete">Delete</a>');
     }
       //add name character
  };


  var addListeners = function(){
    $('img').click(function(e){
      console.log('on click');
      targeting(e);
    });

    //DELETE LINK
    addListenerDelete();
    //SUBMIT BUTTON
    addListenerButton();

    $('#container').mouseenter(function(){
      showTags();
      $('form').removeClass("hidden")
    }).mouseleave(function(){
      $('form').addClass("hidden")
      hideTags();
    });

  }

    var addListenerDelete = function(){
      $('.delete').click(function(e){
        e.preventDefault();
        console.log('inside delete event');
        e.stopPropagation();
        deleteTag(e);
      });
    }

    var addListenerButton = function(){
      $('input[type=submit]').click(function(e){
        e.preventDefault();
        console.log('inside input submit event');
        character_id = $('form select').val();
        createTag(coord_x, coord_y, character_id);
      });

  };

  var deleteTag= function(e){
    var target = $(e.target).parent();
    var tag_id = target.attr('id');
    var destination = '/tags/'+ tag_id;
    target.remove();
    total-=1
    $.ajax({
      type: 'DELETE',
      url: destination,
      data: {tag: {id: tag_id}},
      dataType: 'json',
      success: function(){
        console.log('ajax deleted tag. YAY!');

      },
      error: function(){
        console.log('ajax failed to delete tag');

      },
      complete: function(){
        console.log('ajax delete complete');

      }
    });
  };

  var showTags = function(){
    $('.tag').removeClass('hidden');
  };

  var hideTags = function(){
    $('.tag').addClass('hidden');
  };

  var targeting = function(e){
    console.log('inside target fun');
    $('#photo').append('<div class="tag" id="last"></div>');
    coord_x = e.pageX-50;
    coord_y = e.pageY-50;
    $('#last').css({left:  coord_x, top:  coord_y});
    $('form').css({left:  coord_x, top:  coord_y});
    
    // $('#last').removeAttr("id");
  };

  var gameOver = function(){
    if(total === 4){
      timer.clearInterval()
      var finalScore = $('#score').text()
       $('#score').text("CONGRATULATION! You found all characters. Your score is " + finalScore)
    }
  };
  var createTag = function(x, y, char_id){
    var destination = '/tags';
    $.ajax({
        type: 'POST',
        url: destination,
        data: {tag: {tag_x: x, tag_y: y, character_id: char_id}},
        dataType: 'json',
        success: function(){
          console.log('ajax create tag success');

          character_name = $("form option:selected").text();
         
          $('#last').html(character_name+'<br><a href="#" class="delete">Delete</a>')

          $('#last').removeAttr("id");
          addListenerDelete();
          total+=1
          gameOver();
          
        },
        error: function(){
          console.log('ajax failed to create tag');
          $('#last').remove();
        },
        complete: function(){
          console.log('ajax createTag complete');
          $('#last').removeAttr("id");
        }
      });
  };




  return {
    init: init
  };
})($);

$(document).ready(function(){
  console.log('page ready');
  games.init();}
 );




