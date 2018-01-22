function asdasd(input) {


    function getAverage(input) {
        let sum = 0;
        for(let digit of input) {
            sum += Number(digit);
        }
        return sum/input.length
    }


    let average = getAverage(input);


    let addNine = x => x + "9";

    while (average<=5){
        input = addNine(input);
        average = getAverage(input)
    }

    console.log(input);

}
asdasd(["101"]);
asdasd(["5835"]);