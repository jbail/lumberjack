/*!
 * Lumberjack JavaScript Utility v0.2
 * http://github.com/jbail/lumberjack
 *
 * Copyright 2013 Jeff Bail
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 2013-11-24
 */
(function () {

  function Console(console, name, options) {
    var opts = {enabled: options ? options.enabled : true}, streams = {}, logs = [];



    //private
    function log(args, type) {
      args = argumentsToArray(args);
      
      if (opts.enabled) {
        console[type].apply(console, args);
      }

      args.push(new Date()) //add timestamp
      logs.push(args);
    };

    function argumentsToArray(arguments) {
      return Array.prototype.slice.call(arguments, 0);
    };



    //public
    this.stream = function (name, options) {
      var stream = streams[name];

      if (!stream) {
        stream = new Console(console, name, options);
        streams[name] = stream;
      }
      
      return stream;
    };

    this.on = function () {
      opts.enabled = true;
    };
    
    this.off = function () {
      opts.enabled = false;
    };
    
    this.logs = function () {
      return logs;
    }
    
    this.log = function () {
      log(arguments, 'log');
    };
    
    this.dir = function () {
      log(arguments, 'dir');
    };  
    
    this.info = function () {
      log(arguments, 'info');
    };
    
    this.warn = function () {
      log(arguments, 'warn');
    };
    
    this.error = function () {
      log(arguments, 'error');
    };  
  }


  //override window.console
  console = window.console;
  window.console = new Console(console);

})();