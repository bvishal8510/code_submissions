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

function selectionSort(arr, n) {
    let m;
    let mp;

    for(let i=0;i<n-1;++i) {
        m = arr[i];
        mp = i;
        for(let j=i+1;j<n;++j) {
            if(arr[j]<m) {
                m=arr[j];
                mp=j;
            }
        }

        if (mp !== i) {
            let temp = arr[i];
            arr[i] = m;
            arr[mp] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([10], 1))
