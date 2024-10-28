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

// optimized
function lenOfLongSubarr(arr,n, k) {

    let i=-1,j=0;
    let sum = arr[j];
    let l = 0;

    while(j<n) {
        if(sum === k) {
            if(l<(j-i)) l=j-i;
            ++j;
            sum += arr[j];
        }
        if (sum < k) {
            ++j;
            sum += arr[j];
        }
        else {
            while(sum > k) {
                ++i;
                sum -= arr[i];
            }
        }
    }
    return l;
}
// console.log(lenOfLongSubarr([-1, 2, 3, 1],4,3));
console.log(lenOfLongSubarr([-13,0,6,15,16,2,15,-12,17,-16,0,-3,19,-3,2,-9,-6],17,15));

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