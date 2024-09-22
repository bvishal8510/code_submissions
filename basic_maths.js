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
//     for(let i=1;i<=Math.sqrt(n1);++i) {
//         if (n1%i === 0) {
//             s.add(i);
//             s.add(Math.trunc(n1/i));
//         }
//     }
//     for(let i=1;i<=Math.sqrt(n2);++i) {
//         if (n2%i === 0) {
//             let sn = Math.trunc(n2/i);
//             if (s.has(i) && i>hcf) hcf=i;
//             if (s.has(sn) && sn>hcf) hcf=sn;
//         }
//     }
//     return hcf;
// }

// console.log(hcfOrGcd(20, 15))

// // optimised brute 
// function hcfOrGcd(n1, n2) {
//     let sm = (n1<n1)?n1:n2;
//     let hcf = 1;
//     for(let i=Math.sqrt(sm);i>0;--i) {
//         if(sm%i===0) {
//             let d1 = i;
//             let d2 = sm/i;

//             if ((n1%d1 === 0) && (n2%d1 === 0) && d1>hcf) hcf=d1;
//             if ((n1%d2 === 0) && (n2%d2 === 0) && d2>hcf) hcf=d2;
//         }
//     }

//     let lcm = hcf * (n1/hcf) * (n2/hcf);
//     return [lcm, hcf];
// }

// console.log(hcfOrGcd(5, 10))

// // optimal approach
// function hcfOrGcd(n1,n2) {
//     if (n1 <= 0) return n2;
//     else if (n2<=0) return n1;

//     let sm = (n1<n2)?n1:n2;
//     let gr = (n1>n2)?n1:n2;

//     return hcfOrGcd(gr-sm, sm);
// }
// console.log(hcfOrGcd(5, 10))

// // most optimal approach
// function hcfOrGcd(n1,n2) {
//     let on1 = n1;
//     let on2 = n2;
//     let hcf = 1;
//     while(n1>0 && n2>0) {
//         if(n1>n2) n1=n1%n2;
//         else n2=n2%n1;
//     }

//     if(n1===0) hcf=n2;
//     else hcf=n1;

//     let lcm = hcf * (on1/hcf) * (on2/hcf);

//     return [lcm, hcf];
// }
// console.log(hcfOrGcd(5, 10))

// // https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/
// function isArmstrongNumber(num) {
//     let l = String(num).length;
//     let onum = num;
//     let result = 0;

//     while(num>0) {
//         let d = num%10;
//         result += Math.pow(d, l);
//         num = Math.floor(num/10);
//     }

//     if(onum === result) return true;
//     return false;
// }
// console.log(isArmstrongNumber(371))

// // https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/
// function printAllDivisors(num) {
//     let result = new Set();

//     for(let i=1;i<=Math.sqrt(num);++i) {
//         if(num%i === 0) {
//             result.add(i);

//             if(i !== (num/i)) result.add(num/i);
//         }
//     }
//     return [...result];
// }

// console.log(printAllDivisors(36))

// // https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/
// function primeOrNot(num) {

//     for(let i=2;i<=Math.sqrt(num);++i) {
//         if(num%i === 0) return false;
//     }
//     return true;
// }

// console.log(primeOrNot(10))

// https://www.naukri.com/code360/problems/reverse-bits_2181102?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf
// function reverseBits(inum) {
//     let num;
//     let bit;
//     let result = 0;

//     for(let i=0;i<32;++i) {
//         num = Math.pow(2, i);
//         bit = (inum & num);
//         if(bit) result += Math.pow(2, 31-i);
//     }
//     return result;
// }

// console.log(reverseBits(4))
