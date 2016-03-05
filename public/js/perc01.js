console.log("...perc01.js loaded");

function loadPerc01(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/perc01", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};

// Play Perc 1 on click
function clickPerc01(){
  $('#perc01').click(function(){
    loadPerc01();
        changePadColor('#perc01', 'orange', 'darkorange');
  });
};

// Trigger hi-hat on shift button
function keydownPerc01() {
$(window).keydown(function (e) {
  if (e.which === 88) {
    e.preventDefault();
    loadPerc01();
    changePadColor('#perc01', 'orange', 'darkorange');
  }
});
};

$(function(){
  clickPerc01();
  keydownPerc01();
})
