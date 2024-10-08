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

// optimized
function secondlargestElement(arr) {
    if(arr.length < 2) return -1;

    let l=-1;
    let sl=-1;

    for(let i=0;i<arr.length;++i) {
        if(arr[i]>l) {
            sl=l;
            l=arr[i]
        }
        else if ((arr[i]>sl)&&(arr[i]!==l)) {
            sl=arr[i];
        }
    }
    return sl;
}

console.log(secondlargestElement([10,1,10]))