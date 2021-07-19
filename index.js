const distanceFromHqInBlocks = function (currentLocation) {
    if (currentLocation > 42) {
        return currentLocation - 42
    } else {
        return 42 - currentLocation
    }
};

const distanceFromHqInFeet = function (currentLocation) {
    if (currentLocation > 42) { 
        return (currentLocation - 42) * 264
    } else {
        return (42 - currentLocation) * 264
    }
};

const distanceTravelledInFeet = function (start, end) {
    if (start > end) {
        return (start - end) * 264
    } else {
        return (end - start) * 264
    }
}

const calculatesFarePrice = function (begin, destination) {
    let feetTraveled = distanceTravelledInFeet(begin, destination)
    if (feetTraveled <= 400) {
        return 0
    } else if (feetTraveled > 400 && feetTraveled < 2000) {
        return (feetTraveled - 400) * .02
    } else if (feetTraveled > 2000 && feetTraveled < 2500) {
        return (25) 
    } else { 
        return 'cannot travel that far'
    }
} 
