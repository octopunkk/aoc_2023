const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n").map(l => l.split(' ').map(Number));

// PART 1
// const predict = sequences => {
//     const lastSequence = sequences.at(-1)
//     if(lastSequence.every(v => v==0)){
//         let prediction = 0
//         sequences.forEach(sequence => {
//             prediction+=sequence.at(-1)
//         })
//         return prediction
//     }
//     else{
//         let nextSequence = []
//         for(let i = 1; i < lastSequence.length; i++){
//             nextSequence.push(lastSequence[i] - lastSequence[i - 1])
//         }
//         return predict([...sequences, nextSequence])
//     }
// }
// let sum = 0
// input.forEach(history => sum+=predict([history]))
// console.log(sum)

// PART 2
const predict = sequences => {
    const lastSequence = sequences.at(-1)
    if(lastSequence.every(v => v==0)){
        let prediction = 0
        sequences.at(-1).push(0)
        for (let i = sequences.length -1 ; i > 0 ; i--){
            prediction = sequences[i - 1][0] - prediction
        }
        return prediction
    }
    else{
        let nextSequence = []
        for(let i = 1; i < lastSequence.length; i++){
            nextSequence.push(lastSequence[i] - lastSequence[i - 1])
        }
        return predict([...sequences, nextSequence])
    }
}
let sum = 0
input.forEach(history => sum+=predict([history]))
console.log(sum)
