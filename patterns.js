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

function printPattern(n) {
    let str = "";
    for(let i=n;i>0;--i) {
        str="";
        for(let j=0;j<i;++j) {
            str += String(j+1)+" ";
        }
        console.log(str);
    }
}

printPattern(7)