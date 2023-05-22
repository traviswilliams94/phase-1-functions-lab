// Code your solution in this file!

function distanceFromHqInBlocks(start){
   return Math.abs(start - 42)
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(start){
return Math.abs(start - 42)  * 264
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start,destination){
    return Math.abs(destination - start) * 264
}
distanceTravelledInFeet(56,42);



function calculatesFarePrice(start, destination){
    const distance = Math.abs(destination - start)*264
    if (distance <= 400){
        return 0
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    }
    else if (distance > 2000 && distance <= 2500){
        return 25
    }
    else if (distance > 2500){
        return 'cannot travel that far'
    }
}

calculatesFarePrice(34,32);

