'use strict';

async function delay(ms) {
    await new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}


module.exports = {
    delay
}