var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  //cat will only be used with this function
  var animal = 'cat'
  return animal
}

function add2(n) {
  //two needs to be defined first
  const two = 2
  return n + two
}

var funkyFunction = function() {
  var funky = "FUNKY!"
  return function() {
    return funky
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()