fi = (function() {

  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const i in collection){
        callback(collection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let array =[];
      for (const i in collection){
        array.push(callback(collection[i]));
      }
      return array;
    },

    reduce: function(collection, callback, acc = 0) {
      let b = acc;
      for (const i of collection){
        b = callback(b, i, collection);
      }
      return b;
    },

    find: function(collection, predicate){
      for (const i in collection) {
              if (predicate(collection[i]) === true) {
                return collection[i];
              }
            }
    },

    filter: function(collection, predicate) {
          const newArr = [];
          for (const i in collection) {
            if (predicate(collection[i]) === true) {
              newArr.push(collection[i]);
            }
          }
          return newArr;
        },

        size: function(collection) {
          return Object.keys(collection).length;
        },

        first: function(array, n) {
          const newArr = [];
          if (n === undefined) {
            return array[0];
          } else {
            return array.slice(0, n);
          }
        },

        last: function(array, n) {
          const newArr = [];
          if (n === undefined) {
            return array[array.length-1];
          } else {
            return array.slice(array.length - n);
          }
        },

        compact: function(array) {
          const newArr = [];
          for (const i in array){
            if (array[i]) {
              newArr.push(array[i]);
            }
          }
          return newArr;
        },

        sortBy: function(arr, iteratee){
          return [...arr].sort(function(a,b) {return iteratee(a) - iteratee(b)})
        },


        flatten: function(array) {

        },

        uniq: function(array, isSorted, iteratee) {

        },


        keys: function(obj) {
     return Object.keys(obj)
   },

   values: function(obj) {
     return Object.values(obj)
   },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
