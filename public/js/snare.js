console.log("snare.js loaded");

  function loadSnare(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/snare", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play the snare on click
function playSnare(){
  $('#snare').click(function(){
    loadSnare();
        changePadColor('#snare', 'lime', 'linen');
  });
};

// Trigger snare on enter button
function enterSnare() {
$(window).keydown(function (e) {
  if (e.keyCode === 16) {
    e.preventDefault()
    loadSnare();
    changePadColor('#snare', 'lime', 'linen');
  }
});
};


$(function(){
playSnare();
enterSnare();
});
