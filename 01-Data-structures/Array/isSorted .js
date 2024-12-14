

const isSorted = (arr) => {
for (let i = 1; i < arr.length; i++) {
    if (arr[i- 1] > arr[i ]) return false;
}
return true;
};
console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2]));   // false
