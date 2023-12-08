const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n");

// PART 1
// const directions = input[0].split('');
// const nodes = input.splice(2).map(e => ([...e.matchAll(/(\w+)/g)]).map(a => a[0]))

// let currentNode = nodes.find(n => n[0] === 'AAA')
// let currentStep = 0
// let totalSteps = 0

// while( currentNode[0] !== 'ZZZ') {
//     if(directions[currentStep] == 'L'){
//         currentNode = nodes.find(n => n[0] === currentNode[1])
//     }
//     else{
//         currentNode = nodes.find(n => n[0] === currentNode[2])
//     }
//     if(currentStep == directions.length -1){
//         currentStep = 0
//     }
//     else{
//         currentStep+=1
//     }
//     totalSteps +=1
// }
// console.log(totalSteps)

// PART 2

const directions = input[0].split('');
const nodes = input.splice(2).map(e => ([...e.matchAll(/(\w+)/g)]).map(a => a[0]))
let steps = []

let currentNodes = nodes.filter(n => n[0][2] === 'A')
currentNodes.forEach(node => {
    let currentStep = 0
    let totalSteps = 0
    let currentNode = node

    while( currentNode[0][2] !== 'Z') {
        if(directions[currentStep] == 'L'){
            currentNode = nodes.find(n => n[0] === currentNode[1])
        }
        else{
            currentNode = nodes.find(n => n[0] === currentNode[2])
        }
        if(currentStep == directions.length -1){
            currentStep = 0
        }
        else{
            currentStep+=1
        }
        totalSteps +=1
    }
    steps.push(totalSteps)
})
const lcm = (...arr) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const _lcm = (x, y) => (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
  };

console.log(lcm(...steps))