/**
 * Closure + Lexical Scoping
 */
var count = (function () {
     var _counter = 0;
     return function () {
       _counter += 1;  
       console.log("Counter Value:", _counter);
      }
})();

count();
count();
count();

// More example
let makeAdd = function(num){

  let add = function(inner) {
    return num + inner;
  };

  return add;
};

console.log("Add Now:" , makeAdd(3)(2));

let addTen = new makeAdd(10);
let fifteen = addTen(5);
console.log("Result from Adding 10 and 5 : ",fifteen);