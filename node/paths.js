const path = require('path');

const notes = '/users/joe/notes.txt'

// console.log(path.dirname(notes))
// console.log(path.basename(notes))
// console.log(path.extname(notes))
// console.log(notes, path.basename(notes))

// const name = "brian"

// console.log(path.join('/','users',name,'notes.txt'))

// console.log(path.resolve('notes.txt'))

// console.log(path.resolve('tmp', 'joe.txt'))

console.log(path.resolve('/etc', 'joe.txt'))

console.log(path.normalize('/users/joe/..//test.txt'))
