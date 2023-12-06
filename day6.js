const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n");

// PART 1
// const times = [...input[0].matchAll(/(\d+)/g)].map(v => Number(v[0]))
// const distances = [...input[1].matchAll(/(\d+)/g)].map(v => Number(v[0]))
// let sums = []
// times.forEach((time, index) => {
//     let sum = 0
//     const distance = distances[index];
//     for(i = 0; i < time; i++){
//         const myDistance = (time - i)*i 
//         if(myDistance > distance){
//             sum +=1
//         }
//     }
//     sums.push(sum)
// })
// console.log(sums.reduce((a, b) => a * b))

// PART 2
const time = Number(input[0].replace(/\s/g, '').match(/(\d+)/g)[0])
const distance = Number(input[1].replace(/\s/g, '').match(/(\d+)/g)[0])

let sum = 0
for(i = 0; i < time; i++){
    const myDistance = (time - i)*i 
    if(myDistance > distance){
        sum +=1
    }
}

console.log(sum)