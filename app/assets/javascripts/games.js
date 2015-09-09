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


    $('#photo').append('<div class="tag" id="last"></div>')
    $('#last').css({left:  e.pageX-50, top:  e.pageY-50});
    $('#last').removeAttr("id");
    createTag(e.pageX-50, e.pageY-50);
  };

  var createTag = function(x, y){
    var destination = '/tags';
    $.ajax({
        type: 'POST',
        url: destination,
        data: {tag: {tag_x: x, tag_y: y}},
        dataType: 'json',
        success: function(json){
          // updateTag(json);
          console.log('create tag success');
        },
        failure: function(){
          console.log('failed to create tag');
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




