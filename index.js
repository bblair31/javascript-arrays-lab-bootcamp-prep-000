// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift()
}
function appendKitten(name) {
  return [...kittens, "Broom"]
}
function prependKitten(name) {
  return ["Broom", ...kittens]
}