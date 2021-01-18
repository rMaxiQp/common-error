'use strict'

const EventEmitter = require('events')
const { delay } = require('./utils')

/**
 * Async/Await & Event Emitter
 * 
 * EventEmitter doesn't handle async function nicely, so we will have `end` function handler resolved before we have `event` function handlers resolved.
 * That's what a `Promise` mean, right? 
 */
function async_event() {
    const ee = new EventEmitter();
    
    ee.on('event', async function() {
        await delay(10);
        // Writing to stderr to avoid buffering.
        console.error('Hello Event!')
    })

    ee.on('end', function() {
        console.error('End event...')
    })

    for (let i = 0; i < 10; i++) {
        ee.emit('event')
    }
    ee.emit('end')
}

async_event()