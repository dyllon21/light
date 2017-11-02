var five = require("johnny-five");

console.log('waiting for arduino to connect');

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();

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
      stopBlink = setInterval(function() {
        setTimeout(function() {
          led.on();
        }, 90);
      })
    }
    this.blink_slow = function() {
      led.blink();
      setInterval(function() {
        led.on();
      }, 1000);
      setTimeout(function() {
        led.blink();
      }, 300);
    }
  }
  var light = new LedLight(7);
  light.on();
  // light.off();
  // light.blink_fast();
  // light.blink_slow();

  var counter = 0;
  var stopBlink;

  setInterval(function() {
    counter++
    console.log(counter);
    if (counter == 8) {

      light.on();
      clearInterval(stopBlink);

    } else if (counter == 13) {
      // counter++;
      light.blink_slow();

    } else if (counter == 15) {
      counter = 0
      light.off();
    }
  }, 500);
});
