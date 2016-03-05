console.log("...tom2.js loaded");

function loadTom2(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/tom2", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play Perc 2 on click
function clickTom2(){
  $('#tom2').click(function(){
    loadTom2();
        changePadColor('#tom2', 'deepskyblue', 'linen');
  });
};

// Trigger hi-hat on shift button
function keydownTom2() {
$(window).keydown(function (e) {
  if (e.which === 68 || e.which === 75) {
    e.preventDefault();
    loadTom2();
    changePadColor('#tom2', 'deepskyblue', 'linen');
  }
});
};

$(function(){
  clickTom2();
  keydownTom2();
})
