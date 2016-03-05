console.log("...crash1.js loaded");

function loadCrash1(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/crash1", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play Perc 1 on click
function clickCrash1(){
  $('#crash1').click(function(){
    loadCrash1();
        changePadColor('#crash1', 'mediumvioletred', 'gold');
  });
};

// Trigger hi-hat on shift button
function keydownCrash1() {
$(window).keydown(function (e) {
  if (e.which === 219) {
    e.preventDefault();
    loadCrash1();
    changePadColor('#crash1', 'mediumvioletred', 'gold');
  }
});
};

$(function(){
  clickCrash1();
  keydownCrash1();
})
