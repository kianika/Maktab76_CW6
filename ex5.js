/* let arr = [1, 0, [2, [[3]], null, 14], [null], [15], "hi", ""];

const flatten = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    while (true) {
      if (Array.isArray(arr[i])) {
        arr.splice(i, 1, ...arr[i]);
      } else {
        break;
      }
    }
  }
  return arr;
};
flatten(arr);


let newArr = arr.filter((e) => e !== null);

console.log(newArr); */

// second approach
 
let arr = [1, 0, [2, [[3]], null, 14], [null], [15], "hi", ""];
arr = arr.flat(Infinity).filter(i => i != null);
console.log(arr);
