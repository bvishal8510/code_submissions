// https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0
function frequencies(arr, n, p) {
    let count = 0;
    for(let i=0;i<n;++i) {
        if (arr[i] > n) {
            arr[i]=0;
            ++count;
        }
        else arr[i]=arr[i]-1;
    }
    for(let i=0;i<n;++i) {
        arr[arr[i]%p] = arr[arr[i]%p] + p;
    }
    arr[0] = arr[0] - (p*count);
    for(let i=0;i<n;++i) {
        arr[i] = Math.floor(arr[i]/p);
    }
    return arr;

}
console.log(frequencies([8, 9], 2, 9))