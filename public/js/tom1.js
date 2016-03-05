console.log("...tom1.js loaded");

function loadTom1(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/tom1", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play Perc 1 on click
function clickTom1(){
  $('#tom1').click(function(){
    loadTom1();
        changePadColor('#tom1', 'darkorange', 'linen');
  });
};

// Trigger hi-hat on shift button
function keydownTom1() {
$(window).keydown(function (e) {
  if (e.which === 83 || e.which === 74) {
    e.preventDefault();
    loadTom1();
    changePadColor('#tom1', 'darkorange', 'linen');
  }
});
};

$(function(){
  clickTom1();
  keydownTom1();
})
