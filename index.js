// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kittens, name) {
  kittens = kittens.push("Ralph")
  return kittens
}