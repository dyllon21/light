var five = require("johnny-five");

console.log('waiting for arduino to connect');

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board({
  port: "/dev/ttyACM0"
});

board.on('ready', function() {
  console.log('board ready!');
  var pin = new five.Pin(7);
  var led = new five.Led(7);


  var LedLight = function() {

    this.on = function() {
      led.on();
    }
    this.off = function() {
      led.off();
    }
    this.blink_fast = function() {
      led.blink();
      setInterval(function() {
        led.on();
      }, 90);
    }
    this.blink_slow = function() {
      led.blink();
      setInterval(function() {
        led.on();
      }, 5000);
      setTimeout(function() {
        led.blink();
      }, 10000);
    }
  }
  var light = new LedLight(7);
  light.on();
  // light.off();
  // light.blink_fast();
  // light.blink_slow();

  var counter = 0;

  setInterval(function() {
    console.log(counter);
    counter++
    if (counter === light) {
      // counter++;
      light.on();
    } else {
      light.off();
    }
  }, 1000);
  // }else if(counter === 5){
  //   counter++;
  //   led.blink();
  // }else if (counter === 7){
  //   counter++;
  //   led.off();
  // }

});
