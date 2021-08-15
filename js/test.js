/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const leng = nums.length;

  for (let i = 0; i < leng; i++) {
    for (let j = 0; j < leng; j++) {
      const rr1 = nums[i];
      const rr2 = nums[j];

      const result = rr1 + rr2;
      if (result === target && i !== j) {
        // console.log([i, j]);
        // continue;
        return [i, j];
      }
    }
  }
};

twoSum([3, 2, 4], 6);
