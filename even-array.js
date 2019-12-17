function range(start, end, step) {
  let output = [];
  if (start < end && step > 0) { 
    for (i = start; i < end; i += step) { output.push(i) }
  return output;
}
  


console.log(range(-9, 3, 3));
console.log(range(0, 8, 2));