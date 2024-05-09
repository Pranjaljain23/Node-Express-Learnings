const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received user ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`Some other logic here`)
})

customEmitter.emit('response', 'john', 34)

//Order of .on and .emit matters. .emit can only be used after using .on(i.e after event(response))