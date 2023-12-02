const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n");

// PART 1

// const maxValues = {
//     red: 12,
//     green: 13,
//     blue: 14
// }

// const greenRegex = /(\d+) green/g;
// const redRegex = /(\d+) red/g;
// const blueRegex = /(\d+) blue/g;

// let sum = 0;
// input.forEach((game, id)=> {
//     const gameId = id + 1;
//     const gameParts = game.split(";");
//     let validParts = 0;
//     gameParts.forEach(part => {
//         const greenMatches = [...part.matchAll(greenRegex)][0]
//         const green = greenMatches ? Number(greenMatches[1]) : 0;
//         if (green > maxValues.green) return;

//         const redMatches = [...part.matchAll(redRegex)][0]
//         const red = redMatches ? Number(redMatches[1]) : 0;
//         if (red > maxValues.red) return;

//         const blueMatches = [...part.matchAll(blueRegex)][0]
//         const blue = blueMatches ? Number(blueMatches[1]) : 0;
//         if (blue > maxValues.blue) return;

//         validParts += 1;
//     })
//     if(validParts == gameParts.length){
//         sum+=gameId
//     }
// })

// console.log(sum)

// PART 2

const greenRegex = /(\d+) green/g;
const redRegex = /(\d+) red/g;
const blueRegex = /(\d+) blue/g;

let sum = 0;
input.forEach(game => {
    let maxValues = {
        red: 0,
        green: 0,
        blue: 0
    }
    
    const gameParts = game.split(";");
    gameParts.forEach(part => {
        const greenMatches = [...part.matchAll(greenRegex)][0]
        const green = greenMatches ? Number(greenMatches[1]) : 0;
        if (green > maxValues.green) maxValues.green = green ;

        const redMatches = [...part.matchAll(redRegex)][0]
        const red = redMatches ? Number(redMatches[1]) : 0;
        if (red > maxValues.red) maxValues.red = red;

        const blueMatches = [...part.matchAll(blueRegex)][0]
        const blue = blueMatches ? Number(blueMatches[1]) : 0;
        if (blue > maxValues.blue) maxValues.blue = blue;

    })
    sum += maxValues.red * maxValues.blue * maxValues.green
    
})

console.log(sum)