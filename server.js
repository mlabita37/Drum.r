var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/public'));

var kickPath = path.join(__dirname, 'samples/kick.wav');
var snarePath = path.join(__dirname, 'samples/snare.wav');
var hihatPath = path.join(__dirname, 'samples/hihat.wav');
var perc01Path = path.join(__dirname, 'samples/perc-1.wav');
var tom1Path = path.join(__dirname, 'samples/tom1.wav');
var tom2Path = path.join(__dirname, 'samples/tom2.wav');
var flTomPath = path.join(__dirname, 'samples/fl_tom.wav');
var ridePath = path.join(__dirname, 'samples/ride.wav');
var crash1Path = path.join(__dirname, 'samples/crash1.wav');
var crash2Path = path.join(__dirname, 'samples/crash2.wav');


app.get('/music/kick', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(kickPath);
    readStream.pipe(res);
});

app.get('/music/snare', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(snarePath);
    readStream.pipe(res);
});

app.get('/music/hihat', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(hihatPath);
    readStream.pipe(res);
});

app.get('/music/perc01', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(perc01Path);
    readStream.pipe(res);
});

app.get('/music/tom1', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(tom1Path);
    readStream.pipe(res);
});

app.get('/music/tom2', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(tom2Path);
    readStream.pipe(res);
});

app.get('/music/flTom', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(flTomPath);
    readStream.pipe(res);
});

app.get('/music/ride', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(ridePath);
    readStream.pipe(res);
});

app.get('/music/crash1', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(crash1Path);
    readStream.pipe(res);
});

app.get('/music/crash2', function(req, res){
    res.set({'Content-Type': 'audio/mpeg'});
    var readStream = fs.createReadStream(crash2Path);
    readStream.pipe(res);
});

var port = 3030;
app.listen(port, function(){
  console.log("...listening on " + port);
});
