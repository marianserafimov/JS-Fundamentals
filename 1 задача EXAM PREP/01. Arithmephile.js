function arithmepile(arrStr) {
    let number = arrStr.map(a=>Number(a))

    let maxValue = Number.MIN_SAFE_INTEGER

    for (var i = 0; i < number.length; i++) {
        if (number[i] >= 0 && number[i] < 10) {
            let sum = 1;
            for (var j = i + 1; j <= i + number[i]; j++) {

                sum = sum * number[j]

            }
            if(sum>maxValue){
                maxValue = sum
            }
        }
    }

    console.log(maxValue);

}
arithmepile(['10',
            '20',
            '2',
            '30',
            '44',
            '3',
            '56',
            '20',
            '24']
)