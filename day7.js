const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n").map(e => e.split(' '));

// PART 1
// const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']

// const getType = (hand) => {
//     const cards = {}
//     hand.split('').forEach(card => cards[card] ? cards[card] +=1 : cards[card] = 1)
//     const sorted = [...Object.values(cards)].sort((a, b) => b - a)
//     if (sorted[0] > 3 ) return sorted[0] + 1
//     if (sorted[0] == 3 && sorted[1] == 2) return 4
//     if(sorted[0] == 3) return 3
//     if(sorted[0] == 2 && sorted[1] == 2) return 2
//     return sorted[0] -1 
// }
// const compareHands = (h1, h2) => {
//     const t1 = getType(h1)
//     const t2 = getType(h2)
//     if (t1 !== t2) {
//         return t1 - t2
//     }
//     for(i = 0; i < 5; i++){
//         const hc1 = cardValues.indexOf(h1[i])
//         const hc2 = cardValues.indexOf(h2[i])
//         if ( hc1 !== hc2) return hc1 - hc2
//     }
// }
// sortedInput = input.sort((h1, h2) => compareHands(h1[0], h2[0]))
// let sum = 0
// sortedInput.forEach((val, index) => sum+=(Number(val[1])*(index+1)))
// console.log(sum)

// PART 2

const cardValues = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A']

const getType = (hand) => {
    const cards = {}
    let jCount = 0;
    hand.split('').forEach(card => {
        if (card == 'J') jCount+=1
        else{
            cards[card] ? cards[card] +=1 : cards[card] = 1
        }
    })
    const sorted = [...Object.values(cards)].sort((a, b) => b - a)
    sorted[0]+=jCount

    if (jCount == 5) return 6
    if (sorted[0] > 3) return sorted[0] + 1 
    if (sorted[0] == 3 && sorted[1] == 2) return 4
    if(sorted[0] == 3) return 3
    if(sorted[0] == 2 && sorted[1] == 2) return 2
    return sorted[0] -1 
}
const compareHands = (h1, h2) => {
    const t1 = getType(h1)
    const t2 = getType(h2)
    if (t1 !== t2) {
        return t1 - t2
    }
    for(i = 0; i < 5; i++){
        const hc1 = cardValues.indexOf(h1[i])
        const hc2 = cardValues.indexOf(h2[i])
        if ( hc1 !== hc2) return hc1 - hc2
    }
}
sortedInput = input.sort((h1, h2) => compareHands(h1[0], h2[0]))
let sum = 0
sortedInput.forEach((val, index) => sum+=(Number(val[1])*(index+1)))
console.log(sum)