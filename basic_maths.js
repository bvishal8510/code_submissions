// // https://takeuforward.org/data-structure/count-digits-in-a-number/

// function countDigits(num) {
//     let count=0;
//     let d;
//     let onum = num;

//     while(num>0) {
//         d = num%10;
//         if(d!==0 && onum%d===0) ++count;
//         num=Math.floor(num/10);
//     }
//     return count;
// }
// console.log(countDigits(336));

// // optimal just for number counting
// function countDigits(num) {
//     return Math.floor(Math.log10(num))+1;
// }

// console.log(countDigits(336));

// // https://takeuforward.org/maths/reverse-digits-of-a-number
// function reverseNumber(num) {
//     let result = 0;

//     while(num>0) {
//         let d = num%10;
//         result = result * 10 + d;
//         num = Math.floor(num/10);
//     }
//     return result;
// }

// console.log(reverseNumber(91846))

// // https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/
// function checkPalindrome(num) {
//     num = String(num);

//     let i=0;j=num.length-1;

//     while(i<=j) {
//         if(num[i]!==num[j]) return false;
//         ++i;
//         --j;
//     }
//     return true;
// }

// console.log(checkPalindrome(51415));

// // https://takeuforward.org/data-structure/find-gcd-of-two-numbers/
// // brute
// function hcfOrGcd(n1, n2) {
//     let s = new Set();
//     let hcf = 1;
//     for(let i=1;i<=Math.ceil(Math.sqrt(n1));++i) {
//         if (n1%i === 0) {
//             s.add(i);
//             s.add(Math.trunc(n1/i));
//         }
//     }
//     for(let i=1;i<=Math.ceil(Math.sqrt(n2));++i) {
//         if (n2%i === 0) {
//             let sn = Math.trunc(n2/i);
//             if (s.has(i) && i>hcf) hcf=i;
//             if (s.has(sn) && sn>hcf) hcf=sn;
//         }
//     }
//     return hcf;
// }

// console.log(hcfOrGcd(20, 15))