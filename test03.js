let long = "It's aa pencil.";
let short = "a pen";

let start = 0;
const end = long.length - short.length;
let match = false;
loop: while (start <= end) {
    for (let i = 0; i < short.length; i++) {
        if (long[start + i] !== short[i]) {
            match = false;
            break;
        }
        match = true;
    }
    if (match) {
        console.log(start);
        break loop;
    }
    start++;
}


// for (let start = 0; start <= long.length - short.length; start++) {
//     let match = true;
//     for (let i = 0; i < short.length; i++) {
//         if (long[start + i] !== short[i]) {
//             match = false;
//             break;
//         }
//     }
//     if (match) {
//         console.log(start);
//     }
// }

