const EventEmitter = require('events');

// const door = new EventEmitter()

const doorTwo = new EventEmitter()

// door.on('slam',()=>console.log('slammed'))
function slamTwo() {
    console.log('slamTwo')
}
doorTwo.on('open', slamTwo)
doorTwo.removeListener('open',slamTwo)
// door.emit('slam');
doorTwo.emit('open')

// console.log(door.eventNames())
// console.log(door.getMaxListeners())
// console.log(door.listenerCount('slam'))