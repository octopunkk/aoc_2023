const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n\n");

// PART 1
// const seeds = [...input[0].matchAll(/(\d+)/g)].map(v => Number(v[0]))
// const maps = input.splice(1).map(l => [...l.split('\n').splice(1)])

// const useMap = (seed, map) => {
//     let res = seed;
//     map.forEach(line => {
//         line = [...line.matchAll(/(\d+)/g)].map(v => Number(v[0]))
//         const sourceRangeStart = Number(line[1]);
//         const destinationRangeStart = Number(line[0]);
//         const rangeLength = Number(line[2]);
//         if(seed >= sourceRangeStart && seed < sourceRangeStart + rangeLength){
//             res = destinationRangeStart + (seed - sourceRangeStart)
//         }
//     })
//     return res
// }

// locations = seeds.map(seed => {
//     let location = seed;
//     maps.forEach(map => {
//         location = useMap(location, map)
//     })
//     return location
// })

// console.log(Math.min(...locations))

// PART 2
const seedLine = [...input[0].matchAll(/(\d+)/g)].map(v => Number(v[0]))
const maps = input.splice(1).map(l => [...l.split('\n').splice(1)])

let res = []
const useMap = (seedStart, seedRange, mapIndex, lineIndex) => {
        if (mapIndex >= maps.length) {
            res.push(seedStart)
            return seedStart
        }
        if (lineIndex >= maps[mapIndex].length ) {
            return useMap(seedStart, seedRange, mapIndex + 1, 0)
        }

        line = [...maps[mapIndex][lineIndex].matchAll(/(\d+)/g)].map(v => Number(v[0]))

        const sourceRangeStart = Number(line[1]);
        const destinationRangeStart = Number(line[0]);
        const rangeLength = Number(line[2]);

        if(seedStart + seedRange < sourceRangeStart || seedStart > sourceRangeStart + rangeLength){
            // seeds fully outside source range
            useMap(seedStart, seedRange, mapIndex, lineIndex + 1)
        }

        else if(seedStart > sourceRangeStart && seedStart + seedRange < sourceRangeStart + rangeLength){
            // seeds fully included in source range
            const nextStart = seedStart + destinationRangeStart - sourceRangeStart
            const nextRange = seedRange
            useMap(nextStart, nextRange, mapIndex + 1, 0)
        }

        else if(seedStart < sourceRangeStart && seedStart + seedRange > sourceRangeStart){
            // end of seeds in source range

            // part in source can access next map 
            const nextStart = destinationRangeStart
            const nextRange = rangeLength - (seedStart - sourceRangeStart)
            useMap(nextStart, nextRange, mapIndex + 1, 0)

            // part outside source is sent against next line
            useMap(seedStart, sourceRangeStart - seedStart, mapIndex, lineIndex + 1)
        }

        else if(sourceRangeStart < seedStart && sourceRangeStart + rangeLength >= seedStart){
            // beggining of seeds in source range

            // part in source can access next map 
            const nextStart = seedStart + destinationRangeStart - sourceRangeStart
            const nextRange = sourceRangeStart + rangeLength - seedStart
            useMap(nextStart, nextRange, mapIndex + 1, 0)

            // part outside source is sent against next line
            useMap(sourceRangeStart + rangeLength, seedStart + seedRange - (sourceRangeStart + rangeLength), mapIndex, lineIndex + 1)
        }
}

for(i = 0; i < seedLine.length; i+=2){
    useMap(seedLine[i], seedLine[i+1], 0, 0)
}

console.log(Math.min(...res.filter(a => a !== 0)))
