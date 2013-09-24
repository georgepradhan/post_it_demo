var Board = function( selector ) {
  // Your board related code goes here
  // Use $elem to access the DOM element for this board
  var $elem = $( selector );
  
  function initialize() {
    // What needs to happen when this object is created?
    // Need to listen to the selector element for our board for clicks
    // Need to append to that element a post it on click

    $elem.on('click', function(){
      renderPostIt($elem);
      makeNotesDraggable();
      makeNotesEditable();
    })
  };

  function renderPostIt(elem){
    var newPostIt = new PostIt();
    elem.append(newPostIt.object);
  };

  function makeNotesDraggable(){
    $('.post-it').draggable({handle: ".header"});
  };

  function makeNotesEditable(){
    $( ".post-it" ).on('click', function( event ) {
      event.stopPropagation();
    })

    $( ".post-it .content" ).on('click', function() {
      // alert('hi')
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

// draggable is making it so we can only right-click
// but we want to be able to left-click and enter the element.

// we want to be able to drag the header alone, but that doesn't carry 
// the content along with the header: just hte header alone

// we have no exit-button 

// we don't append the new post its to where we click (goes to the top left corner)




