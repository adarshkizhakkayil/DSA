// Brute force - O(n log n)

function largest(arr){
    arr.sort((a,b)=>a-b)
    return arr[arr.length-1]
}
console.log(largest([4,2,6,5,9,7]))

// Optimal - O(n)

function highest(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            let temp  =max;
            let max= arr[i];
        }
    }
   return max
}
console.log(largest([4,2,6,5,9,7]))
