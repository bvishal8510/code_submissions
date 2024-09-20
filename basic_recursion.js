// // https://takeuforward.org/recursion/print-n-to-1-using-recursion/
// function printNTo1(n) {
//     if(n===0) return;
//     printNTo1(n-1);
//     process.stdout.write(String(n)+" ");
// }
// printNTo1(64);

// // https://takeuforward.org/recursion/print-1-to-n-using-recursion/
// function print1ToN(n) {
//     if(n===0) return;
//     print1ToN(n-1);
//     process.stdout.write(String(n)+" ");
// }
// print1ToN(7);

// // https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/
// function sumOfFirstNNumbers(n) {
//     // if(n===1) return 1;
//     // return (n + sumOfFirstNNumbers(n-1));

//     let sum = BigInt((n*(n+1))/2);
//     return String(sum * sum);
// }
// console.log(sumOfFirstNNumbers(18456));

// // https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/
// function factorial(n) {
//     if(n===1) return 1;
//     return (n * factorial(n-1));
// }
// console.log(factorial(5));

// // https://takeuforward.org/data-structure/reverse-a-given-array/
// function reverseArray(arr, i=0) {
//     if (i === (arr.length)) {
//         return [];
//     }
//     let result = reverseArray(arr, i+1);
//     result.push(arr[i]);
//     return result;
// }
// console.log(reverseArray([1]))

function reverseArray(arr) {
    let i=0;
    let l = arr.length-1;

    while(i<l) {
        let temp = arr[i];
        arr[i]=arr[l];
        arr[l]=temp;
        ++i;
        --l;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4]))