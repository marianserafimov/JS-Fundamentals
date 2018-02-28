function jansNotation(inputOperands) {
    let secondNumbers = []
    let secondOperators = []



    for (let i = 0; i < inputOperands.length; i++) {
        if (!isNaN(inputOperands[i])) {
            secondNumbers.push(inputOperands[i])
        } else {
            secondOperators.push(inputOperands[i])
        }
    }
    if (secondNumbers.length !== secondOperators.length + 1) {
        if (secondNumbers.length > secondOperators.length + 1) {
            console.log("Error: too many operands!")

            return
        }
        if (secondNumbers.length < secondOperators.length + 1) {
            console.log("Error: not enough operands!")

            return
        }
    }
    let numbers = []


    for (let i = 0; i < inputOperands.length; i++) {
        if (!isNaN(inputOperands[i])) {
            numbers.push(inputOperands[i])
        } else {
            if (inputOperands[i] === "+") {
                let sum = numbers[numbers.length - 2] + numbers[numbers.length - 1]
                numbers.pop()
                numbers.pop()
                numbers.push(sum)
            }
            if (inputOperands[i] === "-") {
                let sum = numbers[numbers.length - 2] - numbers[numbers.length - 1]
                numbers.pop()
                numbers.pop()
                numbers.push(sum)
            }
            if (inputOperands[i] === "*") {
                let sum = numbers[numbers.length - 2] * numbers[numbers.length - 1]
                numbers.pop()
                numbers.pop()
                numbers.push(sum)
            }
            if (inputOperands[i] === "/") {
                let sum = numbers[numbers.length - 2] / numbers[numbers.length - 1]
                numbers.pop()
                numbers.pop()
                numbers.push(sum)
            }
        }

    }
    console.log(numbers.join(" "))
    //numbers = inputOperands.filter(a => Number(a))
    //console.log(numbers);


    /*function ifOrNOtIf(inputOperands, num1) {
        let secondNumbers = []
        let secondOperators = []



        for (let i = 0; i < inputOperands.length; i++) {
            if (!isNaN(inputOperands[i])) {
                secondNumbers.push(inputOperands[i])
            } else {
                secondOperators.push(inputOperands[i])
            }
        }
        if (secondNumbers.length !== secondOperators.length + 1) {
            if (secondNumbers.length > secondOperators.length + 1) {
                console.log("Error: too many operands!")
                asdasd = num1+5
                return asdasd;
            }
            if (secondNumbers.length < secondOperators.length + 1) {
                console.log("Error: not enough operands!")
                asdasd = num1+5
                return asdasd;
            }
        }
    }*/
}

