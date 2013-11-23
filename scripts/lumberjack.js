(function () {
  var opts = {enabled: true, logging: true}, streams = {}, stream, console; 



  //override window.console
  console = window.console;
  window.console = {};



  //internal use only
  function log(args, type) {
    if (streams[stream].enabled) {
      console[type].apply(console, argumentsToArray(args));
    }
    if (opts.logging) {
      streams[stream].logs.push(argumentsToArray(args));
    }
    stream = undefined;
  };

  function argumentsToArray(arguments) {
    return Array.prototype.slice.call(arguments, 0);
  };



  //console enhancements
  window.console.stream = function (name) {
    stream = name;
    if (streams[stream] == undefined) {
      streams[stream] = {enabled: opts.enabled, logs: []}
    }
    return window.console;
  };
  window.console.on = function (name) {
    streams[name || stream].enabled = true;
  };
  window.console.off = function (name) {
    streams[name || stream].enabled = false;
  };
  window.console.logs = function (name) {
    return streams[name || stream].logs;
  }



  //console overrides
  window.console.log = function () {
    log(arguments, 'log');
  };
  window.console.dir = function () {
    log(arguments, 'dir');
  };  
  window.console.info = function () {
    log(arguments, 'info');
  };
  window.console.warn = function () {
    log(arguments, 'warn');
  };
  window.console.error = function () {
    log(arguments, 'error');
  };  



  window.console.stream(); //init the default stream
})();