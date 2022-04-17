const EventEmitter = require('events')

const emitter = new EventEmitter();


emitter.on('saved', ()=>{
    console.log('Asaved event occured')
});

emitter.emit('saved')

console.log(emitter)