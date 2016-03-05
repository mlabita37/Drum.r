console.log("...crash2.js loaded");

function loadCrash2(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/crash2", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play Perc 2 on click
function clickCrash2(){
  $('#crash2').click(function(){
    loadCrash2();
        changePadColor('#crash2', 'mediumvioletred', 'gold');
  });
};

// Trigger hi-hat on shift button
function keydownCrash2() {
$(window).keydown(function (e) {
  if (e.which === 221) {
    e.preventDefault();
    loadCrash2();
    changePadColor('#crash2', 'mediumvioletred', 'gold');
  }
});
};

$(function(){
  clickCrash2();
  keydownCrash2();
})
