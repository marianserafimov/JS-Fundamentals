function asdasd(input) {
    let howMuchNumbersINeed = input.shift();



    function firstNumbers(howMuchNumbersINeed,input) {
        let arr = [];
        for (var i = 0; i < howMuchNumbersINeed; i++) {
            arr.push(input[i])

        }
        return arr
    }
    function lastNumbers(howMuchNumbersINeed,input) {
        let arr = [];
        for (var i = 0; i < howMuchNumbersINeed; i++) {
            let popedNum = input.pop()
            arr.push(popedNum)

        }
        arr.reverse();
        return arr
    }

    let firstNumebers = firstNumbers(howMuchNumbersINeed,input)
    let secondNumbers = lastNumbers(howMuchNumbersINeed,input)

    console.log(firstNumebers.join(" "));
    console.log(secondNumbers.join(" "));


}
asdasd([2,
            7, 8, 9])