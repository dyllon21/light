var five = require("johnny-five");

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();

board.on('ready', function() {
  console.log('board ready!');
  var pin = new five.Pin(7);
  var led = new five.Led(7);

//   var on_count = 0;
//
// for (var i = 0; i < led.length; i++) {
//   led[i];
//
//   if(led > 0){
// return on_count++;
//
//   }
// }
  var LedLight = function(){

    if(this.on){
      return  counter ++;
    }

    this.on = function(){
      led.on();
    }
    this.off = function(){
      led.off();
    }
    this.blink = function(){
    setTimeout(function() {
      led.blink();
    }, 1000);
  }


  }
  var light = new LedLight(7);
  light.on();

});
