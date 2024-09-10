// https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/


// function printPattern(n) {
//     let str = "";
//     for(let i=0;i<n;++i) {
//         str="";
//         for(let j=0;j<n;++j) {
//             str += "* ";
//         }
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     let str = "";
//     for(let i=0;i<n;++i) {
//         str="";
//         for(let j=0;j<i+1;++j) {
//             str += "* ";
//         }
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     let str = "";
//     for(let i=0;i<n;++i) {
//         str="";
//         for(let j=0;j<i+1;++j) {
//             str += String(j+1)+" ";
//         }
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     let str = "";
//     for(let i=0;i<n;++i) {
//         str="";
//         for(let j=0;j<i+1;++j) {
//             str += String(i+1)+" ";
//         }
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     let str = "";
//     for(let i=n;i>0;--i) {
//         str="";
//         for(let j=0;j<i;++j) {
//             str += "* ";
//         }
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     let str = "";
//     for(let i=n;i>0;--i) {
//         str="";
//         for(let j=0;j<i;++j) {
//             str += String(j+1)+" ";
//         }
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     for(let z=0;z<n;++z) {
//         let str = "";
//         for(let i=n-z-1;i>0;--i) str += " ";
//         for(let j=0;j<z+1;j++) str += "*";
//         for(let k=0;k<z;++k) str += "*";
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     for(let z=0;z<n;++z) {
//         let str = "";
//         for(let i=0;i<z;++i) str += " ";
//         for(let j=n-z;j>0;--j) str += "*";
//         for(let k=n-z-1;k>0;--k) str += "*";
//         console.log(str);
//     }
// }

// printPattern(7)

// function printPattern(n) {
//     for(let z=0;z<n;++z) {
//         let str = "";
//         for(let i=n-z-1;i>0;--i) str += " ";
//         for(let j=0;j<z+1;j++) str += "*";
//         for(let k=0;k<z;++k) str += "*";
//         console.log(str);
//     }
//     for(let z=0;z<n;++z) {
//         let str = "";
//         for(let i=0;i<z;++i) str += " ";
//         for(let j=n-z;j>0;--j) str += "*";
//         for(let k=n-z-1;k>0;--k) str += "*";
//         console.log(str);
//     }
// }

// printPattern(7)

function printPattern(n) {
    for(let z=0;z<n;++z) {
        let str="";
        for(let i=0;i<z+1;++i) str += "*";
        console.log(str);
    }
    for(let z=0;z<n-1;++z) {
        let str="";
        for(let i=n-z-1;i>0;--i) str += "*";
        console.log(str);
    }
}

printPattern(5)
