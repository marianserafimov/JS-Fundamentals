function magiccGrid(input) {
    let encryptedMessage = input[0]
    let magicNumber = Number(input[1])
    let matrix = []
    for (var i = 2; i < input.length; i++) {
        matrix.push(input[i])

    }
    matrix = matrix.map(row => row.split(" ").map(Number))

    let sumOfRowsCols = sumOf2Rows2Cols(matrix,magicNumber)


    let decryptedMessage = "";

    decryptedMessage += String.fromCharCode(encryptedMessage.charCodeAt(0)+sumOfRowsCols)


    for (var i = 1; i < encryptedMessage.length; i++) {
                   //and add 2
        if(i%2===0){ //add 2 chars
            decryptedMessage+= String.fromCharCode(encryptedMessage.charCodeAt(i)+sumOfRowsCols)
        } else {
            decryptedMessage+= String.fromCharCode(encryptedMessage.charCodeAt(i)-sumOfRowsCols)
        }
    }

    console.log(decryptedMessage);

    function sumOf2Rows2Cols(matrix, magicNumber) {
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[0].length; col++) {
            let theNumImlookingFor = magicNumber - matrix[row][col]

            for (var row2 = 0; row2 < matrix.length; row2++) {
                for (var col2 = 0; col2 < matrix[0].length; col2++) {
                    if (theNumImlookingFor === matrix[row2][col2]) {
                        if (row2 + col2 !== row + col) {
                            let sumOfRowsCols = row + col + row2 + col2
                            return sumOfRowsCols;
                        }
                    }

                }

            }


        }

    }
}
}
magiccGrid( [
                '>scsimh$deo$]$^mnxdh]}',
                '400',
                '200 100 120',
                '120 102 300',
                '150 290 370'
            ]
)