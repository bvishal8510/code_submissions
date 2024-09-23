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

// function reverseArray(arr) {
//     let i=0;
//     let l = arr.length-1;

//     while(i<l) {
//         let temp = arr[i];
//         arr[i]=arr[l];
//         arr[l]=temp;
//         ++i;
//         --l;
//     }
//     return arr;
// }
// console.log(reverseArray([1,2,3,4]))

// function checkPalindromeRecursion(str, i=0) {
//     let j = str.length - 1 - i;
//     if (j<=i) return true;
//     else if (str[i]!==str[j]) return false;
//     return checkPalindromeRecursion(str, i+1);
// }

// console.log(checkPalindromeRecursion("  "))

// function validPalindrome(istr) {
//     let cstr = "";
//     let i=0;
//     for(i=0;i<istr.length;++i) {
//         let ascii = istr.charCodeAt(i);

//         if((ascii>64 && ascii < 91) || (ascii>96 && ascii < 123) || (ascii>47 && ascii < 58)) {
//             if (ascii>64 && ascii < 91) {
//                 cstr += String.fromCharCode(ascii + 32);
//             }
//             else cstr += istr[i];
//         }
//     }

//     i=0;
//     let j=cstr.length-1;

//     while(i<j) {
//         if (cstr[i]!==cstr[j]) return false;
//         ++i;
//         --j;
//     }

//     return true;

// }

// console.log(validPalindrome("race a car"))

// function fibonacci(a,b,n,c) {
//     if (c>n) return;
//     let nn = a+b;
//     process.stdout.write(String(nn) + " ");
//     fibonacci(b,nn,n,c+1)
// }

// function printFibonacci(n) {
//     if (n===0) process.stdout.write("0 ");
//     else { process.stdout.write("0 1 ");
//     fibonacci(0,1,n,2);
//     }
// }

// printFibonacci(6);

function fibonacci(a,b,n,c) {
    let nn = a+b;

    if (n===c) return nn;
    return fibonacci(b,nn,n,c+1);
}

function printFibonacci(n) {
    if (n===0) return 0;
    if (n===1) return 1;
    else {
        return fibonacci(0,1,n,2)
    }
}

console.log(printFibonacci(6))