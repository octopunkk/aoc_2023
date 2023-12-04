const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n");

// PART 1

// let totalPoints = 0
// input.forEach(card => {
//     const parsedCard = card.slice(card.indexOf(':')).split('|')
//     const winningNumbers = [...parsedCard[0].matchAll(/(\d+)/g)].flat()
//     const myNumbers = [...parsedCard[1].matchAll(/(\d+)/g)]
//     let points = 0;
//     myNumbers.forEach(nb => {
//         const myNumber = nb[0]
//         if (winningNumbers.includes(myNumber))  points+=1 
//     })
//     totalPoints += (Math.floor(2**(points - 1)))
// })
// console.log(totalPoints)

// PART 2

let numOfCards = new Array(input.length).fill(1);

input.forEach((card, index) => {
    const parsedCard = card.slice(card.indexOf(':')).split('|')
    const winningNumbers = [...parsedCard[0].matchAll(/(\d+)/g)].flat()
    const myNumbers = [...parsedCard[1].matchAll(/(\d+)/g)]
    let points = 0;
    myNumbers.forEach(nb => {
        const myNumber = nb[0]
        if (winningNumbers.includes(myNumber))  points+=1 
    })
    for(i = index + 1; i <= index + points; i++){
        numOfCards[i] += numOfCards[index]
    }
})
console.log(numOfCards.reduce((a, b) => a+b))