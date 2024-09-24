function bubbleSort(arr, n) {
    for(let i=0;i<n-1;++i) {
        for(let j=0;j<n-i;++j) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("jh", arr);
    }
    return arr;
}

console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10))