//Events (Core module of node js) https://nodejs.org/api/events.html

// step 1
//these are module so we need to require it

const events = require('events');

// element.on('click', function(){
//     console.log("hi");
// })



// 2 custom emitters we first use :
const myEmitter = new events.EventEmitter();

// 3 a custom event emitter declaration
myEmitter.on('customEvent', function (msg) {
    console.log(msg);
})

// 4 make the event happen using .emit
myEmitter.emit('customEvent', 'Message from custom event...')