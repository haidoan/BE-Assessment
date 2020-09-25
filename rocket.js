const displayResult = (time, destination, travelled) => {
    console.log(`reached destination at the ${time}th second, required / travelled distance = ${destination}/${travelled} meters`)
}
const displayGoingResult = (time, destination, travelled) => {
    console.log(`${time}th second, total travelled distance = ${travelled} meters`)
}

const calculateRocketTime = () => {
    let destination = Number(process.argv[2])
    if(isNaN(destination) || destination <= 0){
        return console.error(`ERROR: input is distance value,please input positive value in kilometer, syntax 'node rocket DISTANCE_VALUE'`)
    }

    // convert km to meter
    destination *= 1000
    if(destination === 1){
        return displayResult(1,destination, 1)
    }
    // the distance in each second that rocket travel is fibonacci value in that second index
    // time(seconds)   0 1 2 3 4 5  6  7   (seconds)
    // fib index       0 1 1 2 3 5  8  13
    // total distance  0 1 2 4 7 12 20 33  (meter)
    // so total distance in Xth second will be sum of fib while sum <= goal distance
    let prev = 1
    let next = 1;
    let time = 2
    let distanceInNextSecond = 0
    let travelledDistance = prev + next
    while (true) {
        time++
        // in next second,travelled distance = the last second's travelled distance  + the last 2 seconds's travelled distance
        distanceInNextSecond = prev + next
        if (travelledDistance + distanceInNextSecond >= destination) {
            return displayResult(time,destination, travelledDistance + distanceInNextSecond)
        }
        displayGoingResult(time,destination, travelledDistance + distanceInNextSecond)
        travelledDistance += distanceInNextSecond
        const temp = next
        prev = temp
        next = distanceInNextSecond
    }
}

calculateRocketTime()
