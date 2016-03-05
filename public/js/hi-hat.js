console.log("...hi-hat.js loaded");

function loadHihat(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/hihat", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data, hiHatGain(), loop, hiHatSpeed());
  }
  request.send();
};


function hiHatGain(){ // Grabs the value of the input slider and sets it to a volume variable
  var vol = $('#hiHatGain').val();
  console.log(vol);
  $("#hiHatGain").on( "change input", function () {
      var value = $(this).val();
      console.log(value);
      $('#hiHatVol').text(value);
   });
  return vol;
}

function hiHatSpeed(){ // Grabs the value of the input slider and sets it to a volume variable
  var speed = $('#hiHatSpeed').val();
  console.log(speed);
  return speed;
}

function clickHiHat(){
  $('#hi-hat').click(function(){
    loadHihat();
        changePadColor('#hi-hat', 'magenta', 'gold');
  });
};

// Trigger hi-hat on enter button
function keydownHiHat() {
$(window).keydown(function (e) {
  if (e.which === 13 || e.which === 222 || e.which === 65) {
    e.preventDefault();
    loadHihat();
    changePadColor('#hi-hat', 'magenta', 'gold');
  }
});
};

$(function(){
  clickHiHat();
  keydownHiHat();
});
