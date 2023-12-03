const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n");

// PART 1

// const rowLength = input[0].length;
// const isNextToSymbol = (colStart, colEnd, row) => {
//     // console.log(`checking for ${colStart} -> ${colEnd} on row ${row}`)
//     for (i = colStart - 1; i <= colEnd ; i++){
//         if(i >= 0 && i < input.length){
//             for(j = row - 1; j <= row + 1; j++){
//                 if(j >= 0 && j < rowLength){
//                     if(isNaN(input[j][i]) && input[j][i] !== '.'){
//                         return true
//                     }
//                 }
//             }
//         }
//     }
//     return false
// }

// let sum = 0;
// input.forEach((line, row) => {
//     const numbers = [...line.matchAll(/(\d+)/g)]
//     numbers.forEach(num => {
//         const number = Number(num[0]);
//         const column = num.index
//         const numSize = num[0].length;
//         if(isNextToSymbol(column, column + numSize, row)){
//             sum += number
//         }
//     })
// })
// console.log(sum)

// PART 2

const rowLength = input[0].length;
let gears = {

}
const isNextToGear = (colStart, colEnd, row) => {
    for (i = colStart - 1; i <= colEnd ; i++){
        if(i >= 0 && i < input.length){
            for(j = row - 1; j <= row + 1; j++){
                if(j >= 0 && j < rowLength){
                    if(input[j][i] === '*'){
                        return `${i}_${j}`
                    }
                }
            }
        }
    }
    return false
}

let sum = 0;
input.forEach((line, row) => {
    const numbers = [...line.matchAll(/(\d+)/g)]
    numbers.forEach(num => {
        const number = Number(num[0]);
        const column = num.index
        const numSize = num[0].length;
        const gear = isNextToGear(column, column + numSize, row);
        if(gear){
            if(gears[gear]){
                gears[gear].push(number)
            }
            else{
                gears[gear] = [number]
            }
        }
    })
})

Object.values(gears).forEach(pair => {
    if(pair.length == 2){
        sum += pair[0] * pair[1]
    }
})

console.log(sum)
