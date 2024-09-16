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

// https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/
function checkPalindrome(num) {
    num = String(num);

    let i=0;j=num.length-1;

    while(i<=j) {
        if(num[i]!==num[j]) return false;
        ++i;
        --j;
    }
    return true;
}

console.log(checkPalindrome(51415));
