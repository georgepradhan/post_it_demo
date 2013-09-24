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
      makeNotesDraggable()

    })
  };

  function renderPostIt(elem){
    var newPostIt = new PostIt();
    elem.append(newPostIt.object);
  };

  function makeNotesDraggable(){
    $( ".post-it" ).draggable();    
  }

  initialize();
};




var PostIt = function() {
  // Your post-it related code goes here
  var post_it_stuff = " class=\"post-it\">"
  var header_stuff = " class=\"header\">"
  var content_stuff = " class=\"content\" contenteditable=\"true\">"

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
