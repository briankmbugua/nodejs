const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`some other logic`)
})
//order is important here you cannot listen to an event that you have  not emitted

customEmitter.emit('response','john',34);
