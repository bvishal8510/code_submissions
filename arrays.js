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


// https://leetcode.com/problems/rotate-array/description/
function reverse(s,l,arr) {
    while(s<l) {
        let temp = arr[s];
        arr[s]=arr[l];
        arr[l]=temp;
        ++s;
        --l;
    }
}

function rotateArrayByK(arr,k) {
    let n = arr.length;
    k=k%n;
    console.log(k);
    if (k===0) return arr;

    n=n-1;

    reverse(n-k+1,n,arr);
    reverse(0,n-k,arr);
    reverse(0,n,arr);
    return arr;
}

console.log(rotateArrayByK([-1],1));