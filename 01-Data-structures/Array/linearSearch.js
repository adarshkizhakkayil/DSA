function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return -1; 
}
let arr = [23, 45, 12, 67, 34, 89, 2];
let target = 67;

let result = linearSearch(arr, target);
console.log(result);
