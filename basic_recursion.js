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
function sumOfFirstNNumbers(n) {
    if(n===1) return 1;
    return (n + sumOfFirstNNumbers(n-1));
}
console.log(sumOfFirstNNumbers(100000));

// // https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/
// function factorial(n) {
//     if(n===1) return 1;
//     return (n * factorial(n-1));
// }
// console.log(factorial(5));

