var Board = function( selector ) {
  // Your board related code goes here
  // Use $elem to access the DOM element for this board
  var $elem = $( selector );
  
  function initialize() {
    // What needs to happen when this object is created?
    // Need to listen to the selector element for our board for clicks
    // Need to append to that element a post it on click

    $elem.on('click', function(e){
      var left = e.offsetX
      var top = e.offsetY
      renderPostIt($elem, top, left);
      makeNotesDraggable();
      makeNotesEditable();
    })
  };

  function renderPostIt(elem, top, left){
    var newPostIt = new PostIt();
    elem.append(newPostIt.object);
    var allNotes = document.getElementsByClassName('post-it')
    var newDomElement = allNotes[allNotes.length-1];
    $( newDomElement ).css({
      "top" : top, 
      "left": left
    });
  };

  function makeNotesDraggable(){
    $('.post-it').draggable({handle: ".header"});
  };

  function makeNotesEditable(){
    $( ".post-it" ).on('click', function( event ) {
      event.stopPropagation();
    })

    $( ".post-it .content" ).on('click', function() {
      $(this).attr("contenteditable", "true")
    })

  };

  initialize();
};


var PostIt = function() {
  // Your post-it related code goes here
  var post_it_stuff = " class=\"post-it\">"
  var header_stuff = " class=\"header\">"
  var content_stuff = " class=\"content\">"

  this.object = 
  "<div"+post_it_stuff+
    "<div"+header_stuff+"</div>"+
    "<div"+content_stuff+"</div>"+
  "</div>"
};


$(function() {
  // This code will run when the DOM has finished loading
  // Board.new('#board'); // original code...  
  new Board('#board');
});


// problems: 

// we have no exit-button 




