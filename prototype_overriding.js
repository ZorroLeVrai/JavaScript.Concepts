//defining a new function in the prototype
//WARNING: considered as a bad practice because of possible naming collisions.
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

console.log("ABCDE".reverse()); // Output: "EDCBA"

//defining an existing function in the prototype
String.prototype.repeat = function () {
  return this.length;
};

console.log("AB".repeat(2)); // Output: 2