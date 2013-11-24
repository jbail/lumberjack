(function () {

  function Console(console, name) {
    var opts = {enabled: true, logging: true}, streams = {}, logs = [];



    //private
    function log(args, type) {
      args = argumentsToArray(args);
      
      if (opts.enabled) {
        console[type].apply(console, args);
      }
      
      if (opts.logging) {
        logs.push(args);
      }
    };

    function argumentsToArray(arguments) {
      return Array.prototype.slice.call(arguments, 0);
    };



    //public
    this.stream = function (name) {
      var stream = streams[name];

      if (!stream) {
        stream = new Console(console, name);
        streams[name] = stream;
      }
      
      return stream;
    };

    this.on = function (name) {
      opts.enabled = true;
    };
    
    this.off = function (name) {
      opts.enabled = false;
    };
    
    this.logs = function (name) {
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