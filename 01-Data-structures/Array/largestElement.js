const largest = (arr)=>{

    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) max=arr[i]
    }

    return max
}

console.log(largest([1,2,3,4,5]))

/*
Time Complexity: 𝑂(n)
Single loop iterates through all 𝑛
Space Complexity: O(1)
Uses a single variable (max) for computation, requiring constant space.

 */