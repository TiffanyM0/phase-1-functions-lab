// Code your solution in this file!
let blocksCovered = 0
function distanceFromHqInBlocks(block){
 blocksCovered = (Math.abs(block - 42))
 return blocksCovered; 
}
console.log (distanceFromHqInBlocks(43))
console.log(blocksCovered)


let feet = 0
function distanceFromHqInFeet(block){
    feet = (distanceFromHqInBlocks(block) * 264);
    return feet;
}
console.log(distanceFromHqInFeet(43))
console.log (feet)


const  distanceTravelledInFeet = function distanceTravelledInFeet(start, destination){
 let inBlocks = Math.abs(destination - start);
 let inFeet = (inBlocks * 264);
 return inFeet; 
}
console.log(distanceTravelledInFeet(43, 48));


function calculatesFarePrice(start, destination){
    let fare = 0;
    let inFeet = distanceTravelledInFeet(start, destination);
    if (inFeet <= 400){
        fare = 0;
   } else if (inFeet > 400 && inFeet <= 2000){
     fare = ((inFeet - 400) *0.02);
   } else if (inFeet > 2000 && inFeet <= 2500){
     fare = 25;
   } else if (inFeet > 2500){
    fare = ('cannot travel that far');
   }
   return fare;
}
console.log (calculatesFarePrice(43, 48));
