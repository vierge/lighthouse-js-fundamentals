const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let inc = 0;
while (inc < ingredients.length) {
  console.log((inc + 1) + ": " + ingredients[inc]);
  inc++;
}

// Write a for loop that prints out the contents of ingredients:

for(i = 0; i < ingredients.length; i++) {
  console.log((i + 1) + ": " + ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(i = ingredients.length - 1; i >= 0; i--) {
  console.log((i + 1) + ": " + ingredients[i]);
}