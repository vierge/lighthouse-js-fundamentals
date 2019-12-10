const raining = false;
const temperature = 666;
const isCitizen = true;
const age = 26;

if(isCitizen && age > 18) {
  console.log("You're eligible to vote...");
}

if(raining) {
  console.log("Don't forget your umbrella!");
}

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if(temperature < 15) {
  console.log("Short sleeves won't cut it...");
} else {
  console.log("short sleeves are fine~");
}

if(temperature < -40 || temperature > 40) {
  console.log("weather bad. weather homicidal. people scary. stay inside");
}

if(!raining) {
  console.log("Leave your umbrella at home!");
}

console.log("Now you're ready to go outside! and vote! or whatever!");