const whichSchool = function (age) {
  if(age <= 13) {
    console.log("Elementary School");
  } else if(age > 13 && age < 18) {
    console.log("Secondary School");
  } else {
    console.log("Lighthouse Labs");
  }
  return "";
}

console.log("I am 1. Which school should I go to?");
console.log(whichSchool(1));
console.log("I am 100. Which school should I go to?");
console.log(whichSchool(100));
console.log("I am 16. Which school should I go to?");
console.log(whichSchool(16));