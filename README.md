# Lumberjack

Lumberjack hijacks the browser console and enhances it so logs can be split into more manageable chunks.

## Getting Started

1. Copy lumberjack.js into your project.
2. That's it! It just works.

## What is Lumberjack?

Browser based applications with lots of JavaScript often result in lots of logging. Unfortunately, the single stream logging built into modern web browsers (through console.log) gets noisy as more and more events are logged. In can become difficult to even follow the logs. Lumberjack aims to fix that.

## Usage

Instead of logging everything with console.log, Lumberjack encourages you to split your logs into bitesized chunks that map to your applications functionality. In Lumberjack, these are called *streams*. Streams aggregate all your logging under a string name. For example:

```
console.stream('cat').info('I do not like you.');
console.stream('cat').warn('Hiss!');

console.stream('dog').info('The feeling is mutual.');
console.stream('dog').warn('Woof!');
```

With Lumberjack you can turn on or off logging globally or for specific sections of your code. If we don't want to hear the dog bark anymore, we can do this:

```
console.stream('dog').off();
//or
console.off('dog');

console.stream('dog').log('Bark! Bark! Bark!'); //not going to appear in the console
```

Even if you turn off a stream, all statements logged to it are still being recorded behind the scenes by Lumberjack. At any point while your application is running you can audit all the log statements like so:

```
console.stream('dog').logs(); //returns an Array of everything logged to the 'dog' stream
```

## Author

**Jeff Bail**

+ <https://twitter.com/jeffabail>
+ <https://github.com/jbail>