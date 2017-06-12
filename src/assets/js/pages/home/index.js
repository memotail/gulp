define(function(require, exports, module) {
  console.log('home/index run');

  var types = require('./../../common/types.js');

  return {
    init: function() {
      console.log('init');

      console.log(types.isString('test'));
    }
  }
});
