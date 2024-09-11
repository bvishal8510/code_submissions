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

// function printPattern(n) {
//     for(let z=0;z<n;++z) {
//         let str="";
//         for(let i=0;i<z+1;++i) str += "*";
//         console.log(str);
//     }
//     for(let z=0;z<n-1;++z) {
//         let str="";
//         for(let i=n-z-1;i>0;--i) str += "*";
//         console.log(str);
//     }
// }

// printPattern(5)


// function printPattern(n) {
//     let s;
//     for(let i=0;i<n;++i) {
//         if(i%2===0) s=1;
//         else s=0;
//         let str = "";
//         for(let j=0;j<i+1;++j) {
//             str += s + " ";
//             s = 1-s;
//         }
//         console.log(str);
//     }
// }

// printPattern(6)

function printPattern(n) {
    for(let z=0;z<n;++z) {
        let str = "";
        for(let i=0;i<z+1;++i) str += i+1;
        for(let j=0;j<(n-z-2)*2;++j) str += " ";
        for(let k=0;k<z+1;++k) str += k+1;
        console.log(str);
    }
}

printPattern(6)
