# Lumberjack

Lumberjack hijacks the browser console and enhances it so logs can be split into more manageable chunks.

## Getting Started

1. Copy lumberjack.js into your project.
2. That's it!

## What is Lumberjack?

Browser based applications with lots of JavaScript often result in lots of logging. Unfortunately, the single stream logging built into modern web browsers (through console.log) gets noisy as more and more messages are logged. In can become difficult to even follow the logs. Lumberjack aims to fix that.

## Usage

Instead of logging everything with console.log, Lumberjack encourages you to split your logs into bite-sized chunks that map to your application's functionality. In Lumberjack, these are called *streams*. Streams organize your logging by name. For example:

```
console.stream('cat').info('I do not like you.');
console.stream('cat').warn('Hiss!');

console.stream('dog').info('The feeling is mutual.');
console.stream('dog').warn('Woof!');
```

With Lumberjack you can turn on or off logging globally or for specific sections of your code. If you don't want to hear the dog bark anymore, you can do this:

```
console.stream('dog').off();
//or
console.off('dog');

console.stream('dog').log('Bark! Bark! Bark!'); //this message isn't going to appear in the console
```

Even if you turn off a stream, all statements logged to it are still being recorded behind the scenes by Lumberjack. At any point while your application is running you can audit all the log statements like so:

```
console.stream('dog').logs(); //returns an Array of every message logged to the 'dog' stream
```

Conversely, if you want to turn a stream on, it's just as easy:

```
console.stream('rooster').log('qui-qui-ri-qui!'); //this message isn't going to appear in the console

console.stream('rooster').on();
//or
console.on('rooster');

console.stream('rooster').log('COCKADOODLEDOO!'); //this message will appear in the console
```

Lumberjack supports all the semantic console logging functions: console.log, console.info, console.dir, console.warn and console.error. 

## Author

**Jeff Bail**

+ <https://twitter.com/jeffabail>
+ <https://github.com/jbail>

## License

Lumberjack is licensed under the MIT Open Source license. <http://opensource.org/licenses/MIT>