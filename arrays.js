var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
];
function addElementToBeginningOfArray(chocolateBars,foo){
  return ["foo", ...chocolateBars];
}
function destructivelyAddElementToEndOfArray(chocolateBars,foo){
  chocolateBars.push(foo);
  return chocolateBars
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
