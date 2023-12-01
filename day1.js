const fs = require("fs");
const input = fs.readFileSync("input1.txt", { encoding: "utf8" }).split("\n");

// PART 1

// let s = 0;
// const res = input.map(line => {
//     const lineAsArray = line.split('');
//     const firstDigit = lineAsArray.find(a => !isNaN(a))
//     const lastDigit = lineAsArray.reverse().find(a => !isNaN(a))
//     return parseInt(`${firstDigit}${lastDigit}`)
// }).reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     s,
//   );
// console.log(res)

// PART 2

let s = 0;
const numRegex = /([1-9]|one|two|three|four|five|six|seven|eight|nine)/g;
const greedyNumRegex = /.*([1-9]|one|two|three|four|five|six|seven|eight|nine)/g;

const numbers = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five':'5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}
const res = input.map(line => {
    const matches = [...line.matchAll(numRegex)]
    const greedyMatches = [...line.matchAll(greedyNumRegex)]
    const firstDigit = isNaN(matches[0][0]) ? numbers[matches[0][0]] : (matches[0][0]);
    const lastDigit = isNaN(greedyMatches[greedyMatches.length -1][1]) ? numbers[greedyMatches[greedyMatches.length -1][1]] : (greedyMatches[greedyMatches.length -1][1]);

    return parseInt(`${firstDigit}${lastDigit}`)
}).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        s,
      );
    console.log(res)
