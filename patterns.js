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

// function printPattern(n) {
//     for(let z=0;z<n;++z) {
//         let str = "";
//         let i;
//         for(i=0;i<=z;++i) str += i+1;
//         for(let j=0;j<(n-z-1)*2;++j) str += " ";
//         for(;i>0;--i) str += i;
//         console.log(str);
//     }
// }

// printPattern(6)

// function printPattern(n) {
//     let num = 1;
//     for(let z=1;z<=n;++z) {
//         let str = "";
//         for(let i=0;i<z;++i) {
//             str += num + " ";
//             ++num;
//         }
//         console.log(str);
//     }
// }

// printPattern(6)


// function printPattern(n) {
//     for(let z=1;z<=n;++z) {
//         let str = "";
//         for(let i=0;i<z;++i) {
//             str += String.fromCharCode(65+i) + " ";
//         }
//         console.log(str);
//     }
// }

// printPattern(6)

// function printPattern(n) {
//     for(let z=1;z<=n;++z) {
//         let str = "";
//         for(let i=0;i<=n-z;++i) {
//             str += String.fromCharCode(65+i) + " ";
//         }
//         console.log(str);
//     }
// }

// printPattern(6)

// function printPattern(n) {
//     for(let z=1;z<=n;++z) {
//         let str = "";
//         for(let i=0;i<z;++i) {
//             str += String.fromCharCode(65+z-1) + " ";
//         }
//         console.log(str);
//     }
// }

// printPattern(6)


// function printPattern(n) {
//     for(let z=1;z<=n;++z) {
//         let str = "|";
//         for(let j=0;j<(n-z);++j) str += " ";
//         for(let i=0;i<z;++i) {
//             str += String.fromCharCode(65+i);
//         }
//         for(let k=0;k<(z-1);++k) str += String.fromCharCode(65+k);
//         console.log(str);
//     }
// }

// printPattern(5)

// function printPattern(n) {
//     for(let z=1;z<=n;++z) {
//         let str = "|";
//         for(let i=z;i>0;--i) {
//             str += String.fromCharCode(65+n-i);
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n) {
//     let spaces = 0;
//     for(let z=1;z<=n;++z) {
//         let i;
//         let str = "|";
//         for(i=0;i<=(n-z);++i) str += "*";
//         for(let j=0;j<spaces;++j) str += " ";
//         for(;i>0;--i) str += "*";
//         spaces += 2;
//         console.log(str)
//     }
//     spaces = (n-1)*2;
//     for(let z=1;z<=n;++z) {
//         let i;
//         let str = "|";
//         for(i=0;i<z;++i) str += "*";
//         for(let j=0;j<spaces;++j) str += " ";
//         for(;i>0;--i) str += "*";
//         spaces -= 2;
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n) {
//     let spaces = (n-1)*2;
//     for(let z=1;z<=n;++z) {
//         let i;
//         let str = "|";
//         for(i=0;i<z;++i) str += "*";
//         for(let j=0;j<spaces;++j) str += " ";
//         for(;i>0;--i) str += "*";
//         spaces -= 2;
//         console.log(str)
//     }
//     spaces = 2;
//     for(let z=1;z<n;++z) {
//         let i;
//         let str = "|";
//         for(i=0;i<(n-z);++i) str += "*";
//         for(let j=0;j<spaces;++j) str += " ";
//         for(;i>0;--i) str += "*";
//         spaces += 2;
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n) {
//     for(let z=1;z<=n;++z) {
//         if (z===1 || z===n) {
//             for(let i=1;i<=n;++i) process.stdout.write("*");
//         }
//         else {
//             for(let i=1;i<=n;++i) {
//                 if (i===1 || i===n) process.stdout.write("*");
//                 else process.stdout.write(" ");
//             }
//         }
//         console.log();
//     }
// }

// printPattern(5)

// function printPattern(n) {
//     for(let i=0;i<n;++i) {
//         for(let j=0;j<n;++j) {
//             if(i===0 || j===0 || i===(n-1) || j===(n-1)) process.stdout.write("*");
//             else process.stdout.write(" ");
//         }
//         console.log()
//     }
// }

// printPattern(5)

// function printPattern(n) {
//     for(let i=0;i<n;++i) {
//         for(let j=0;j<n;++j) {
//             if(i===0 || j===0 || i===(n-1) || j===(n-1)) process.stdout.write("*");
//             else process.stdout.write(" ");
//         }
//         console.log()
//     }
// }

// printPattern(5)


// function printPattern(n) {
//     let bl = [];
//     let br = [];

//     for(let z=0;z<n;++z) {
//         let tn = n-z;
//         let str = "";
//         let rstr = "";
//         let num = n;
//         for(let i=0;i<n;++i) {
//             str += num;
//             if(num>tn) --num;
//         }
//         for(let i=n-2;i>=0;--i) rstr += str[i];
//         console.log(str+rstr);
//         bl[n-z-1]=str;
//         br[n-z-1]=rstr;
//     }
//     for(let z=1;z<n;++z) {
//         console.log(bl[z]+br[z]);
//     }
// }

// printPattern(4);

function printPattern(n) {
    for(let i=0;i<(2*n-1);++i) {
        for(let j=0;j<(2*n-1);++j) {
            let td = i;
            let ld = j;
            let bd = (2*n - 2) - i;
            let rd = (2*n - 2) - j;

            let num = (n - (Math.min(td, bd, ld, rd)));

            process.stdout.write(String(num));
        }
        console.log();
    }
}

printPattern(4);