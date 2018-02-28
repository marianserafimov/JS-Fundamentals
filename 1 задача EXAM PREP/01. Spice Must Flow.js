function someSolve(inputArr) {
    let currentYield = Number(inputArr[0])
    let extractSpice = 0
    let days = 0

    while (currentYield >= 100){
        extractSpice += currentYield -26
        currentYield -= 10
        days++
    }
    if(extractSpice >= 26){
        extractSpice -= 26
    }

    console.log(days);
    console.log(extractSpice);
}