angular
  .module('request')
  .factory('ParseUtils', function(Parse) {
    var parseUtils = {};
    parseUtils.addSetterGetter = function(module, property) {
      Object.defineProperty(module.prototype, property, {
        get: function() {
          return this.get(property);
        },
        set: function(value) {
          this.set(property, value);
        }
      });
    };

    return parseUtils;
});
