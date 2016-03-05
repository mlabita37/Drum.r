console.log("...fl-tom.js loaded");

function loadFlTom(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/flTom", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play Perc 1 on click
function clickFlTom(){
  $('#floor-tom').click(function(){
    loadFlTom();
        changePadColor('#floorTom', 'hotpink', 'linen');
  });
};

// Trigger hi-hat on shift button
function keydownFlTom() {
$(window).keydown(function (e) {
  if (e.which === 70 || e.which === 76) {
    e.preventDefault();
    loadFlTom();
    changePadColor('#floorTom', 'hotpink', 'linen');
  }
});
};

$(function(){
  clickFlTom();
  keydownFlTom();
})
