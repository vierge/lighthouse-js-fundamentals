let chorus = "Let's dance!";
let repeat = 0; 
//this let/const stuff is real annoying i mean i get why strong typing is better but the udacity lectures use var and this is going to confuse people
while (repeat < 10) {
  if(repeat === 5) {
    console.log("*change key*");
    chorus = "!ecnad s'teL";
  }
  console.log(chorus);
  repeat++;
}
console.log("*boop boop boop boop --- boop boop boop boop boop");

