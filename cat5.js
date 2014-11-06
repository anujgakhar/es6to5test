"use strict";

var Cat = function() {
  var Cat = function Cat(name) {
    if (name === undefined)
      name = 'Simon';

    this.name = name;
  };

  Object.defineProperties(Cat.prototype, {
    meow: {
      writable: true,

      value: function() {
        return 'MROW'
      }
    },

    destroyTheHouse: {
      writable: true,

      value: function() {
        window['Object'] = undefined
      }
    },

    eat: {
      writable: true,

      value: function() {
        return 'nom nom nom'
      }
    },

    sleep: {
      writable: true,

      value: function(callback) {
        setTimeout(callback, 1000)
      }
    }
  });

  return Cat;
}();

module.exports = Cat;
