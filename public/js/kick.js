console.log("...kick.js is loaded");

function loadKick(vol) {
  var request = new XMLHttpRequest();
  request.open("GET", "/music/kick", true); // Grab the audio sample from the server
  request.responseType = "arraybuffer"; // Converts it to audio data

  request.onload = function() {
    var data = request.response;
    process( data, kickGain(), kickLoop(), kickSpeed(), kickDist(), kickDelay()); // convert the sound to audio and pass in the kickDist of gain
  };
  request.send(); // Send the request
};

function kickGain(){ // Grabs the value of the input slider and sets it to a volume variable
  var vol = $('#kickGain').val();
  console.log(vol);
  $("#kickGain").on( "change input", function () {
      var value = $(this).val();
      $('#kickVol').text(value + " Vol");
   });
  return vol;
}

function kickLoop(){
  $("#kickLoop").click(function(){
    loop = !loop;
    var color;
    if (loop == true){
    $('#kickLoop').css('background-color', 'mediumspringgreen');
    }else {
    $('#kickLoop').css('background-color', 'firebrick');
    }
    return loop;
  });
console.log("2nd loop: " + loop);
return loop;
};

function kickSpeed(){ // Grabs the value of the input slider and sets it to a volume variable
  var speed = $('#kickSpeed').val();
  console.log(speed);
  $("#kickSpeed").on( "change input", function () {
      var value = $(this).val();
      $('#kickRate').text(value);
   });
  return speed;
}

function kickDist(){ // Grabs the value of the input slider and sets it to a volume variable
  var dist = $('#kickDist').val();
  console.log(dist);
  $("#kickDist").on( "change input", function () {
      var value = $(this).val();
      $('#kickDistort').text(value);
   });
  return dist;
}

function kickDelay(){
  var delay = $('#kickDelay').val();
  console.log(delay);
  $("#kickDelay").on( "change input", function () {
      var value = $(this).val();
      $("#kickDelVal").text(value + " Del");
   });
  return delay;
}

// Play the kick on click
function clickKick(){
  $('#kick').click(function(){
    loadKick();
    changePadColor('#kick', 'blueviolet', 'mediumspringgreen');
  });
};

// Trigger kick on spacebar
function keydownKick() {
$(window).keypress(function (e) {
  if (e.keyCode === 32) {
    e.preventDefault()
    loadKick();
    changePadColor('#kick', 'blueviolet', 'mediumspringgreen');
    $('#kick').css('width', '290px');
    $('#kick').css('height', '240px');
    setTimeout(function(){
      $('#kick').css('width', '300px');
      $('#kick').css('height', '250px');
    },50);
    beater();
  }
});
};

function beater(){
  console.log("Beater working");
  $('#beater').css('height', '20px');
  $('#knob').css('box-shadow', '-1px 5px 20px #333');
  $('#knob').css('margin', '390px 0 0 474px');
  $('#pedal').css('margin', '380px 0 0 471px');
  setTimeout(function(){
    $('#beater').css('height', '40px');
    $('#beater').css('box-shadow', '-1px 17px 15px #333');
    $('#knob').css('box-shadow', '-1px 5px 15px #333');
    $('#knob').css('margin', '420px 0 0 474px');
    $('#pedal').css('margin', '390px 0 0 471px');
  }, 50);
};

$(function(){
  kickGain();
  kickLoop();
  kickSpeed();
  kickDelay();
  clickKick();
  keydownKick();
});
