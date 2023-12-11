const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n").map(e => e.split(''));

const getDoubles = imgInput => {
    let rows = [];
    let cols = [];
    for (let i = 0; i < imgInput.length; i++){
        if(imgInput[i].every(e => e == '.')){
            rows.push(i);
        }
    }
    for (let i = 0; i < imgInput[0].length; i++){
        for(let j = 0; j <= imgInput.length; j++){
            if(j == imgInput.length){
                cols.push(i)
            }
            else if(imgInput[j][i] !== '.'){
                break;
            } 
        }
    }
    return {cols, rows}
}
const doubles = (getDoubles(input))

const mahattanDistance = (p1, p2) => {
    let rowDist = Math.abs(p1[0]- p2[0])
    for(let i = Math.min(p1[0], p2[0]); i< Math.max(p1[0], p2[0]); i++){
        if(doubles.rows.includes(i)){
            //PART 1
            // rowDist += 1
            //PART 2
            rowDist += 999999
        }
    }
    let colDist = Math.abs(p1[1]- p2[1])
    for(let i = Math.min(p1[1], p2[1]); i< Math.max(p1[1], p2[1]); i++){
        if(doubles.cols.includes(i)){
            //PART 1
            // colDist += 1
            //PART 2
            colDist += 999999
        }
    }
    return  rowDist + colDist
}

let galaxies = [];

input.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
        if (el == '#') galaxies.push([rowIndex, colIndex])
    })
})

let distancesSum = 0

galaxies.forEach((galaxy, index) => {
    for(let i = index+1; i < galaxies.length; i++){
        distancesSum+= mahattanDistance(galaxy, galaxies[i])
    }
})
console.log(distancesSum)