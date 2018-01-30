function sumByTown(strArr) {

    let result = {}

    for (var i = 0; i < strArr.length; i+=2) {
        let town = strArr[i]
        let value = Number(strArr[i+1])

        if(!result.hasOwnProperty(town)){
            result[town] =0
        }
        result[town] +=value

    }
    console.log(result);
}
sumByTown(  'Sofia',
            '20',
            'Varna',
            '3',
            'Sofia',
            '5',
            'Varna')