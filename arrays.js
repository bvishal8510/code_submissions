// // https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-element-in-array
// function largestElement(arr) {
//     let largest = arr[0];
//     for(let i=1;i<arr.length;++i) if(arr[i]>largest) largest=arr[i];
//     return largest;
// }
// console.log(largestElement([1, 8, 7, 56, 90]))

// // https://www.geeksforgeeks.org/problems/second-largest3735/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=second-largest
// function secondlargestElement(arr) {
//     arr = [...(new Set(arr))];
//     if(arr.length === 1) return -1;
//     let l=-1;
//     let sl=-1;
//     if (arr[0]>arr[1]) {
//         l=arr[0];
//         sl=arr[1];
//     }
//     else {
//         l=arr[1];
//         sl=arr[0];
//     }
//     for(let i=2;i<arr.length;++i) {
//         if (arr[i]>l) {
//             if(l>sl) sl=l;
//             l=arr[i];
//         }
//         else {
//             if (arr[i]>sl) sl=arr[i];
//         }
//     }
//     return sl;
// }
// console.log(secondlargestElement([1, 8, 7, 56, 90]))

// // optimized
// function secondlargestElement(arr) {
//     if(arr.length < 2) return -1;
//     let l=-1;
//     let sl=-1;
//     for(let i=0;i<arr.length;++i) {
//         if(arr[i]>l) {
//             sl=l;
//             l=arr[i]
//         }
//         else if ((arr[i]>sl)&&(arr[i]!==l)) {
//             sl=arr[i];
//         }
//     }
//     return sl;
// }
// console.log(secondlargestElement([10,1,10]))

// // https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/submissions/1408828746/
// function arrayRotatedAndSorted(arr) {
//     let count = 0;
//     for(let i=0;i<arr.length;++i) {
//         if (arr[i]>arr[(i+1)%arr.length]) {
//             if(count<1) ++count;
//             else return false;
//         } 
//     }
//     return true;
// }
// console.log(arrayRotatedAndSorted([5,4,6,7,8]))

// // https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1408842737/
// function removeDuplicatesFromSorted(nums) {
//     let i=1,j=1;
//     while(i<nums.length) {
//         if(nums[i]!==nums[i-1]) {
//             nums[j]=nums[i];
//             ++j;
//         }
//         ++i;
//     }
//     while(nums.length>j) {
//         nums.pop();
//     }
//     return nums;
// }
// console.log(removeDuplicatesFromSorted([1,1]))

// // https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
// function sort012(arr) {
//     let s=0;
//     let l=arr.length-1;
//     let i=0;
//     let temp;
//     while(i<=l) {
//         if(arr[i]===0) {
//             if(i!==s) {
//                 temp=arr[i];
//                 arr[i]=arr[s];
//                 arr[s]=temp;
//             }
//             ++s;
//             ++i;
//         }
//         else if(arr[i]===2) {
//             if(i!==l) {
//                 temp=arr[i];
//                 arr[i]=arr[l];
//                 arr[l]=temp;
//             }
//             --l;
//         }
//         else {
//             ++i;
//         }
//     }
//     return arr;
// }
// console.log(sort012([0,1,0,2,1,1,2,0]));

// // https://leetcode.com/problems/rotate-array/description/
// function rotateArrayBy1(arr) {
//     let temp=arr[0];
//     for(let i=1;i<arr.length;++i) {
//         arr[i-1]=arr[i];
//     }
//     arr[arr.length-1]=temp;
//     return arr;
// }
// console.log(rotateArrayBy1([1,2,3,4,5]))


// // https://leetcode.com/problems/rotate-array/description/
// function reverse(s,l,arr) {
//     while(s<l) {
//         let temp = arr[s];
//         arr[s]=arr[l];
//         arr[l]=temp;
//         ++s;
//         --l;
//     }
// }
// function rotateArrayByK(arr,k) {
//     let n = arr.length;
//     k=k%n;
//     if (k===0) return arr;
//     n=n-1;
//     reverse(n-k+1,n,arr);
//     reverse(0,n-k,arr);
//     reverse(0,n,arr);
//     return arr;
// }
// console.log(rotateArrayByK([-1],1));

// // https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/
// function move0sToEnd(arr) {
//     let i=0;
//     let j=0;
//     while(i<arr.length && j<arr.length) {
//         if(arr[i]===0) {
//             j=i+1;
//             while(j<arr.length) {
//                 if(arr[j]!==0) {
//                     let temp = arr[i];
//                     arr[i]=arr[j];
//                     arr[j]=temp;
//                     break;
//                 }
//                 ++j;
//             }
//         }
//         ++i;
//     }
//     return arr;
// }
// console.log(move0sToEnd([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]))

// // https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=who-will-win
// function linearsearch(arr, k) {
//     for(let i=0;i<arr.length;++i) if(arr[i]===k) return true;
//     return false;
// }
// console.log(linearsearch([1, 2, 3, 4, 6], 6))

// // https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=union-of-two-sorted-arrays
// function sortedUnion(arr1, arr2) {
//     let n=arr1.length;
//     let m=arr2.length;
//     let s = new Set();
//     let i=0;
//     let j=0;
//     while(i<n && j<m) {
//         if(arr1[i] < arr2[j]) {
//             s.add(arr1[i]);
//             ++i;
//         }
//         else if (arr1[i] > arr2[j]){
//             s.add(arr2[j]);
//             ++j;
//         }
//         else {
//             s.add(arr1[i]);
//             ++i;
//             ++j;
//         }
//     }
//     while(i<n) {
//         s.add(arr1[i]);
//         ++i;
//     }
//     while(j<m) {
//         s.add(arr2[j]);
//         ++j;
//     }
//     return [...s];
// }
// console.log(sortedUnion([1,2,3],[2,3,4,4,5]))

// // https://leetcode.com/problems/missing-number/description/
// function findMissingNumber(arr) {
//     let totalSum = Math.floor((arr.length*(arr.length+1))/2);
//     for(let i of arr) {
//         totalSum -= i;
//     }
//     return totalSum;
// }
// console.log(findMissingNumber([9,6,4,2,3,5,7,0,1]))

// // https://leetcode.com/problems/max-consecutive-ones/description/
// function findMaxConsecutiveOnes(arr) {
//     let m = 0;
//     let c = 0;

//     for(let i of arr) {
//         if(i===0) {
//             if(c>m) m=c;
//             c=0;
//         }
//         else ++c;
//     }
//     if(c>m) m=c;
//     return m;
// }
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

// // https://leetcode.com/problems/single-number/
// function singleNumber(arr) {
//     let num = 0;
//     for(let i of arr) num = num ^ i;
//     return num;
// }
// console.log(singleNumber([0,0,0]))

https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=longest-sub-array-with-sum-k
// double loops
// function lenOfLongSubarr(arr,n, k) {
//     let ml = 0;
//     let l = 0;
//     let sum = 0;
//     for(let i=0;i<n;++i) {
//         sum = 0;
//         for(let j=i;j<n;++j) {
//             sum += arr[j];
//             ++l;
//             if(sum === k) {
//                 if(ml<l) ml=l;
//                 l=0;
//                 break;
//             }
//             if(sum > k) {
//                 l=0;
//                 break;
//             }
//         }
//     }
//     return ml;
// }
// console.log(lenOfLongSubarr([-1, 2, 3],3,6));

// // optimized
// function lenOfLongSubarr(arr,n, k) {

//     let i=-1,j=0;
//     let sum = arr[j];
//     let l = 0;

//     while(j<n) {
//         if(sum === k) {
//             if(l<(j-i)) l=j-i;
//             ++j;
//             sum += arr[j];
//         }
//         if (sum < k) {
//             ++j;
//             sum += arr[j];
//         }
//         else {
//             while(sum > k) {
//                 ++i;
//                 sum -= arr[i];
//             }
//         }
//     }
//     return l;
// }
// // console.log(lenOfLongSubarr([-1, 2, 3, 1],4,3));
// console.log(lenOfLongSubarr([-13,0,6,15,16,2,15,-12,17,-16,0,-3,19,-3,2,-9,-6],17,15));

// https://leetcode.com/problems/two-sum/
// function twoSum(arr, t) {
//     let m = new Map();

//     for(let i=0;i<arr.length;++i) {
//         if(m.has(t-arr[i])) {
//             return [m.get(t-arr[i]),i];
//         }
//         m.set(arr[i],i);
//     }
// }
// console.log(twoSum([2,7,11,15],9))

// // https://leetcode.com/problems/majority-element/description/
// function majorityElement(arr) {
//     // // brute 1
//     // let sortedArray = arr.sort((a,b)=>a-b);
//     // return sortedArray[Math.floor(arr.length/2)];
//     // // brute 2
//     // let m = new Map();
//     // let max = 0;
//     // let ans = 0;
//     // for(let elem of arr) {
//     //     if(m.has(elem)) m.set(elem, m.get(elem)+1);
//     //     else m.set(elem, 1);
//     //     if(m.get(elem)>max) {
//     //         max=m.get(elem);
//     //         ans=elem;
//     //     }
//     // }
//     // return ans;
//     // Moore’s Voting Algorithm
//     let ans = 0;
//     let c = 0;
//     for(let e of arr) {
//         if(c === 0) {
//             ans = e;
//             ++c;
//         }
//         else if (e === ans) ++c;
//         else --c;
//     }
//     return ans;
// }
// console.log(majorityElement([4,4,2,4,3,4,4,3,2,4]));

// // https://leetcode.com/problems/maximum-subarray/description/
// function maxSubArray(arr) {
//     // let max = arr[0];
//     // let sum = 0;
//     // for(let elem of arr) {
//     //     if((sum+elem) > max) max=sum+elem;
//     //     if((sum+elem)<=0) {
//     //         sum = 0;
//     //     }
//     //     else {
//     //         sum += elem;
//     //     }
//     // }
//     // return max;
// optimal approach
//     let max=arr[0];
//     let sum=0;
//     for(let elem of arr) {
//         sum+=elem;
//         if(sum>max) max=sum;
//         if(sum<0) sum=0;
//     }
//     return max;
// }
// console.log(maxSubArray([2,-1,1,2]));

// // https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// (function maxProfit(arr) {
//     let max = 0;
//     let min = arr[0];
//     for(let i=1;i<arr.length;++i) {
//         if(arr[i]<min) min=arr[i];
//         else if((arr[i]-min)>max) max=arr[i]-min;
//     }
//     return max;
// })([7,6])

// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
(function rearrangeArray(arr){
    // //two array
    // let negarr = [];
    // let posarr = [];
    // for(let e of arr) {
    //     if(e<0) negarr.push(e);
    //     else posarr.push(e)
    // }
    // for(let i=0;i<posarr.length;++i) {
    //     arr[2*i] = posarr[i];
    //     arr[2*i+1] = negarr[i];
    // }
    // return arr;
    
})([-1,1]);

// // https://leetcode.com/problems/frequency-of-the-most-frequent-element/
// function maxFrequency(nums, k) {
//     // //brute
//     // let max=0;
//     // nums = nums.sort((a,b)=>a-b);
//     // for(let i=nums.length-1;i>1;--i) {
//     //     let j = i-1;
//     //     let count=0;
//     //     let dk=k;
//     //     while(j>=0 && ((nums[i]-nums[j])<=dk)) {
//     //         dk-=(nums[i]-nums[j]);
//     //         ++count;
//     //         --j;
//     //     }
//     //     if(count > max) max=count
//     // }
//     // return max+1;
//     //optimized sliding window
//     nums = nums.sort((a,b)=>a-b);
//     let s=0, l=0, total=nums[0],max=0;
//     while(l<nums.length && s<=l) {
//         if((nums[l]*((l-s)+1) - total) <= k) {
//             if(((l-s)+1)>max) max = (l-s)+1;
//             ++l;
//             total +=nums[l];
//         }
//         else {
//             total -= nums[s];
//             ++s;
//         }
//     }
//     return max;
// }
// console.log(maxFrequency([1,2,4], 5))

// // https://www.geeksforgeeks.org/problems/max-sum-in-sub-arrays0824/0
// function pairWithMaxSum(arr){
//     let max = 0;
//     for(let i=0;i<arr.length-1;++i) {
//         if((arr[i]+arr[i+1])>max) max=arr[i]+arr[i+1];
//     }
//     return max;
// }
// console.log(pairWithMaxSum([5, 4, 3, 1, 6]))

// // https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1
// function lenOfLongestSubarr(arr, k) {
//     let max = 0;
//     for(let i=1;i<arr.length;++i) {
//         arr[i] = arr[i]+arr[i-1];
//     }
//     let m = new Map();
//     m.set(0, -1);
//     for(let i=0;i<arr.length;++i) {
//         if (m.has(arr[i]-k)) {
//             if(max < (i-m.get(arr[i]-k))) max = i-m.get(arr[i]-k)
//         }
//         if(!m.has(arr[i])){
//             m.set(arr[i],i);
//         }
//     }
//     return max;
// }
// console.log(lenOfLongestSubarr([10, 5, 2, 7, 1, 9], 15))

// // https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1
// function subarrayXor(arr,k) {
//     let count = 0;
//     let pxor = 0;
//     for(let i=0;i<arr.length;++i) {
//         pxor ^= arr[i];
//         if(pxor === k) ++count;
//         arr[i]=pxor;
//     }
//     let m = new Map();
//     for(let i=arr.length-1;i>=0;--i) {
//         let fxor = arr[i]^k;
//         if(m.has(fxor)) {
//             count += m.get(fxor);
//         }
//         if(!m.has(arr[i])) {
//             m.set(arr[i],1);
//         }
//         else {
//             m.set(arr[i],m.get(arr[i])+1);
//         }
//     }
//     return count;
// }
// console.log()

// // https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
// function rearrangeArray() {
//     let result = [];
//     let pp = 0;
//     let np = 1;
//     for(let i=0;i<nums.length;++i) {
//         if(nums[i]>0) {
//             result[pp] = nums[i];
//             pp+=2;
//         }
//         else {
//             result[np] = nums[i];
//             np+=2
//         }
//     }
//     return result;
// }

// // https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1
// function leaders(arr) {
//     let result = [arr[arr.length-1]];
//     for(let i=arr.length-2;i>=0;--i) {
//         if(arr[i]>=result[result.length-1]) {
//             result.push(arr[i])
//         }
//     }
//     let i=0, j=result.length-1;
//     while(i<j) {
//         let temp = result[i];
//         result[i]=result[j];
//         result[j]=temp;
//         ++i;
//         --j;
//     }
//     return result;
// }
// console.log(leaders([16, 17, 4, 3, 5, 2]))

// // https://leetcode.com/problems/next-permutation/description/
// function nextPermutation(nums) {
//     let i, j, temp;
//     for(i=nums.length-2;i>=0;--i) {
//         if (nums[i] < nums[i+1]) break;
//     }
//     if(i===-1) {
//         let s=0,e=nums.length-1;
//         while(s<e) {
//             temp = nums[s];
//             nums[s]=nums[e];
//             nums[e]=temp;
//             ++s;
//             --e;
//         }
//     }
//     else {
//         for(j=nums.length-1;j>i;--j) {
//             if (nums[j]>nums[i]) break;
//         }
//         temp = nums[j];
//         nums[j]=nums[i];
//         nums[i]=temp;
//         ++i;
//         j=nums.length-1;
//         while(i<j) {
//             temp = nums[i];
//             nums[i]=nums[j];
//             nums[j]=temp;
//             ++i;
//             --j
//         }
//     }
// }
// let nums = [3,2,1];
// nextPermutation(nums);
// console.log(nums)

// // https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1
// function mergeSortedArrayWithNoExtraSpace(a,b) {
//     let pos = 0,ep = 0;
//     let swapped = true;
//     for(let i=0;i<a.length;++i) {
//         if(swapped) {
//             ep = 0;
//             for(let j=1;j<=pos;++j) if(b[j]<b[ep]) ep=j;
//         }
//         if(a[i]>b[ep]) {
//             let temp = a[i];
//             a[i]=b[ep];
//             b[ep]=temp;
//             swapped = true;
//             if(ep===pos) ++pos;
//         }
//         else swapped=false;
//     }
//     b.sort((x,y)=>x-y);
// }
// let a = [2, 4, 7, 10];
// let b = [2, 3];
// mergeSortedArrayWithNoExtraSpace(a,b)
// console.log(a,b)

// // https://leetcode.com/problems/longest-consecutive-sequence/description/
// var longestConsecutive = function(nums) {
//     let m = new Map();
//     let max = 0;
//     for(let i=0;i<nums.length;++i) {
//         m.set(nums[i],-1);
//     }
//     for(let i=0;i<nums.length;++i) {
//         if(m.get(nums[i]) === -1) {
//             let count = 1;
//             let num = nums[i]-1;
//             while(m.has(num)) {
//                 if(m.get(num) === -1) {
//                     ++count;
//                     m.set(num, count);
//                     --num;
//                 }
//                 else {
//                     count += m.get(num);
//                     break;
//                 }
//             }
//             m.set(nums[i],count);
//             if(count > max) max=count;
//         }
//     }
//     return max;
// };
// console.log(longestConsecutive([100,4,200,1,3,2]))

// // https://leetcode.com/problems/set-matrix-zeroes/description/
// var setZeroes = function(m) {
//     let row = m.length;
//     let col = m[0].length;
//     let greater = (row>col)? row: col;
//     for(let i=0;i<row;++i) {
//         for(let j=0;j<col;++j) {
//             if(m[i][j]=== 0) {
//                 for(let k=0;k<greater;++k) {
//                     if (m[k] && m[k][j] && m[k][j]!== 0) m[k][j] = 'a';
//                     if(m[i] && m[i][k] && m[i][k] !== 0) m[i][k] = 'a'
//                 }
//             }
//         }
//     }
//     for(let i=0;i<row;++i) {
//         for(let j=0;j<col;++j) {
//             if(m[i][j] === 'a') {
//                 m[i][j] = 0;
//             }
//         }
//     }
//     return m;
// };
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))

// // https://leetcode.com/problems/rotate-image/description/
// var rotate = function(m) {
//     let rows = m.length-1;
//     let s,e,temp;
//     for(let i=0;i<=rows;++i) {
//         s=0;
//         e=rows;
//         while(s<e) {
//             temp = m[i][s];
//             m[i][s]=m[i][e];
//             m[i][e]=temp;
//             ++s;
//             --e;
//         }
//     }
//     for(let i=0;i<=rows;++i) {
//         for(let j=0;j<(rows-i);++j) {
//             temp = m[i][j];
//             m[i][j] = m[rows-j][rows-i];
//             m[rows-j][rows-i]=temp;
//         }
//     }
//     return m;
// };
// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

// https://leetcode.com/problems/spiral-matrix/description/
var spiralOrder = function(matrix) {
    let result = [];
    let top = 0, left = 0,bottom = matrix.length-1,right = matrix[0].length-1;
    while((bottom >= top) && (right >= left)) {
        for(let i=left; i<=right;++i) {
            result.push(matrix[top][i]);
        }
        ++top;
        for(let i=top;i<=bottom;++i) {
            result.push(matrix[i][right]);
        }
        --right;
        if(bottom >= top) {
            for(let i=right;i>=left;--i) {
                result.push(matrix[bottom][i]);
            }
            --bottom;
        }
        if(right >= left) {
            for(let i=bottom; i>=top;--i) {
                result.push(matrix[i][left]);
            }
            ++left;
        }
    }
    return result;
};