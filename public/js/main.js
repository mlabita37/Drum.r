console.log("locked and loaded");

window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

function process(data, gain, loop, speed, dVal, delayVal) {
  gain = gain || 1; // Make the gain equal the gain parameter, if there is none make it a default value of 1
  loop = loop || false;
  speed = speed || 1;
  dVal = dVal || 0;
  delayVal = delayVal || 0;
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(data, function(buffer){
  source.buffer = buffer;

    // Playback
    source.playbackRate.value = speed;

    //  Loop
    source.loop = loop;

    // Gain
    var gainNode = context.createGain(); // Declare gain
    gainNode.gain.value = gain; // set the value of the gain node equal to the gain variable

    // Distortion
    var distortion = context.createWaveShaper();

    function makeDistortionCurve(dist) {
      var kickD = parseInt(dist);
      var k = typeof kickD === 'number' ? kickD : 50,
        n_samples = 44100,
        curve = new Float32Array(n_samples),
        deg = Math.PI / 180,
        i = 0,
        x;
      for ( ; i < n_samples; ++i ) {
        x = i * 2 / n_samples - 1;
        curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
      }
      console.log("distortion: " + dist)
      return curve;
    };

    distortion.curve = makeDistortionCurve(dVal);
    distortion.oversample = '4x';

    // Delay
    console.log("delayVal: " + delayVal);
    var delayNode = context.createDelay();
    delayNode.delayTime.value = delayVal;

    // Signal Routing
    source.connect(distortion);
    distortion.connect(gainNode);

    gainNode.connect(context.destination); // Connect gain node to "speakers"
    delayNode.connect(context.destination);// Connect delay to speakers

    source.start(context.currentTime); // Schedules the start of the playback to the current time --> so that the sample plays immediately

  });
};


// Global Variables
var loop = false;


// Change the color of the pads on an event
function changePadColor(pad, lightup, origcolor){
  $(pad).css('background-color', lightup);
  setTimeout(function(){
    $(pad).css('background-color', origcolor);
  }, 50);
};

// Trigger sound on keyboard
function key(){
  $('#key2').click(function(){
    loadHihat();
    changePadColor('#key2', 'blue', '#E5E4E2;');
  })
};


$(function(){
key();

$("#open-modal").on("click", function() {
  $("#modal").toggle();
});

$("#close").on("click", function() {
  $("#modal").toggle();
});

});
