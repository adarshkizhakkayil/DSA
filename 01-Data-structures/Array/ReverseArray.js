
const reverseArray = (arr)=>{
    let start =0 
    let end = arr.length-1

    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start ++;
        end --;
    }
    return arr
}

console.log(reverseArray([1,2,3,4,5]))

/*
Time Complexity: O(n)
The function processes all elements of the array exactly once to reverse the array. 

Space Complexity: O(1)
uses only a few variables (start, end, temp) for computation, and no additional memory
is allocated based on the size of the array, so the space complexity is constant.

*/