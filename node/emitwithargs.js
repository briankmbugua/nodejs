const EventEmitter = require('events');

const emitter = new EventEmitter()

function log(args){
    console.log(`name: ${args.name} id: ${args.id}`)
}

emitter.on('saved',log)

emitter.emit('saved',{
    id: 1,
    name: 'brian'
})
emitter.off('saved',log)

//this has no effec
emitter.emit('saved', {
    id: 2,
    name: 'Jane Doe'
});

// const EventEmitter = require('events');

// const emitter = new EventEmitter()

// emitter.on('saved',(a,b)=>{
//     let c = a + b;
//     console.log(c)
// })

// emitter.emit('saved',10,29)

// console.log(EventEmitter)


