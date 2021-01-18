# Javascript

## Content List

- [Asyn/Aawit & Event Emitter](#Async)

### Async/Await & Event Emitter

tl;dr. It's a problem of async/await function & sync function.

An event emitter emits events, that we can attach synchrous function to it.
In general, we have

```.js

if (trigger_event === 'event_name') {
    event_handler();
}
```

If we provide an async function as `event_handler`, it will returns a Promise. Thus, it's possible that the functiona hasn't been resolved.