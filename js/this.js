'use strict'

class Foo {

    constructor() {
    }

    recurse(count) {
        if (count < 0) return;
        console.log(count);
        /**
         * [Error]
         * timers.js:751
         *   throw new ERR_INVALID_CALLBACK();
         *   ^
         * 
         * TypeError [ERR_INVALID_CALLBACK]: Callback must be a function
         * 
         * [SOLUTION]
         *   1. setImmediate(this.recurse.bind(this), count - 1) (Bind this)
         *   2. setImmediate(() => this.recurse(count - 1)) (Return arrow function)
         */
        setImmediate(this.recurse, count -1)
    }
}


const foo = new Foo();
foo.recurse(5)
