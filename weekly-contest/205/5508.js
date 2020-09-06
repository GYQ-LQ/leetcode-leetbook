/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
  let arr2 = [],
    arr1 = [],
    res = 0;
  for (let i = 0; i < nums2.length - 1; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      const e = nums2[i] * nums2[j];
      for (let k = 0; k < nums1.length; k++) {
        const val = nums1[k];
        if (val === Math.sqrt(e)) res++
      }
    }
  }
  for (let i = 0; i < nums1.length - 1; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      const e = nums1[i] * nums1[j];
      for (let k = 0; k < nums2.length; k++) {
        const val = nums2[k];
        if (val === Math.sqrt(e)) res++
      }
    }
  }
  return res
};

numTriplets([4, 7, 9, 11, 23], [3, 5, 1024, 12, 18])
// numTriplets([7, 7, 8, 3], [1, 2, 9, 7])
// numTriplets([1, 1], [1, 1, 1])
// numTriplets([7, 4], [5, 2, 8, 9])
