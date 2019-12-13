//vvvv silly boring garbage way vvvv

// for(let i = 100; i <= 200; i++) {
//   if(i % 3 === 0 && i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if(i % 4 === 0) {
//     console.log("Lighthouse");
//   } else if(i % 3 === 0) {
//     console.log("Loopy");
//   } else {
//     console.log(i);
//   }
// }

//boring!
//vvvv this right here vvvv is the ~cool~ way to do it
//nested ternary operators
//better than if else bloat imo

for(let i = 100; i <= 200; i++) { console.log (
  i % 3 === 0 && i % 4 === 0 ? "LoopyLighthouse" :
  i % 3 === 0 ? "Loopy" :
  i % 4 === 0 ? "Lighthouse" :
  i
); }