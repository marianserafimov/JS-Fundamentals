function bungsdfsAgsfghdhgs(arrStr) {
    let cordinates = arrStr.pop().split(" ")
    let matrix = arrStr.map(row => row.split(" ").map(Number))

    let bunnyDamage = 0
    let bunnnyKillllls = 0

    for (let tokens of cordinates) {
        let [row, col] = tokens.split(",").map(Number)


        if (matrix[row][col] > 0) {
            bunnyDamage += matrix[row][col]
            bunnnyKillllls++
            explode(row, col, matrix)
        }

    }

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] > 0) {
                bunnyDamage += matrix[row][col]
                bunnnyKillllls++
            }
        }
    }
    console.log(bunnyDamage);
    console.log(bunnnyKillllls);










    function explode(row, col, matrix) {

        let bunnyDamage = matrix[row][col]
        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if (isInside(i, j, matrix)) {
                    matrix[i][j] -= bunnyDamage
                }
            }
        }
    }

    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length
            && col >= 0 && col < matrix[row].length
    }
}
bungsdfsAgsfghdhgs( [
                    '5 10 15 20',
                    '10 10 10 10',
                    '10 15 10 10',
                    '10 10 10 10',
                    '2,2 0,1'
]
)