// function bubbleSort(arr, n) {
//     for(let i=0;i<n-1;++i) {
//         for(let j=0;j<n-i;++j) {
//             if(arr[j]>arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10))

// function selectionSort(arr, n) {
//     let m;
//     let mp;
//     for(let i=0;i<n-1;++i) {
//         m = arr[i];
//         mp = i;
//         for(let j=i+1;j<n;++j) {
//             if(arr[j]<m) {
//                 m=arr[j];
//                 mp=j;
//             }
//         }
//         if (mp !== i) {
//             let temp = arr[i];
//             arr[i] = m;
//             arr[mp] = temp;
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([10], 1))

// https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
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
//         }
//         else if(arr[i]===2) {
//             if(i!==l) {
//                 temp=arr[i];
//                 arr[i]=arr[l];
//                 arr[l]=temp;
//             }
//             --l;
//         }
//         ++i;
//     }
//     return arr;
// }
// console.log(sort012([1,0, 2, 1, 1, 1, 0]));

// https://leetcode.com/problems/rotate-array/description/
function rotateArray(arr) {
    let temp=arr[0];
    for(let i=1;i<arr.length;++i) {
        arr[i-1]=arr[i];
    }
    arr[arr.length-1]=temp;
    return arr;
}

console.log(rotateArray([1,2,3,4,5]))