//requires johnny-five module

var five = require("johnny-five");

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();

board.on('ready', function(){
    console.log('board ready');

		var pin = new five.Pin(13);

        // the light will switch on
        pin.high();

		// the light will switch off after 3 seconds
		setTimeout(function(){
	        pin.low()
		}, 3000);
});
console.log('\nWaiting for device to connect...');

// var five = require('johnny-five'),
// //creating new board object
// board = new five.Board(),
// led,
// toggleState = false;
//
// //function for the board when it is ready to recieve;
// board.on("ready", function(){
//   console.log('board ready');
//   led = new five.Led(13);
// // led.blink(1000);
//
//   setInterval(toggleLED, 1000);
//
//   function toggleLED(){
//     toggleState = !toggleState;
//     if(toggleState) led.on();
//     else led.off();
//   }
// });
//uses toggleLed function:
//   setInterval(toggleLed, 200);
//
//   function toggleLed(){
//     toggleState = toggleState;//change from on to off
//
//     if(toggleState) Led.on();
//     else Led.off();
//   }
// });
