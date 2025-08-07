/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
    let i = 0;
    let j = 0;
    let ans = 0;

    while (i < nums.length) {
        j = i;

        while (j < nums.length) {
            if (isStrictIncr(nums, i, j)) ans++;
            j++;
        }

        i++;
    }

    return ans;
};

function isStrictIncr(nums, ignoreS, ignoreE) {
    let t = 0;
    for (let i = 0; i < nums.length; i++) {
        if (ignoreS <= i && i <= ignoreE) continue;

        if (t >= nums[i]) {
            return false;
        } else {
            t = nums[i];
        }
    }

    return true;
}