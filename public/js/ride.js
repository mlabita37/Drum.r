console.log("...ride.js loaded");

function loadRide(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/ride", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play Perc 1 on click
function clickRide(){
  $('#ride').click(function(){
    loadRide();
        changePadColor('#ride', 'mediumvioletred', 'gold');
  });
};

// Trigger hi-hat on shift button
function keydownRide() {
$(window).keydown(function (e) {
  if (e.which === 186) {
    e.preventDefault();
    loadRide();
    changePadColor('#ride', 'mediumvioletred', 'gold');
  }
});
};

$(function(){
  clickRide();
  keydownRide();
})
