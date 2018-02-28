function bunnyKill(arrStr) {
    let bunnyCordinates = arrStr.pop().split(" ")
    let matrix = arrStr.map(row => row.split(" ").map(Number))

    let bunnyDamage = 0;
    let bunnyKills = 0;

    for (let token of bunnyCordinates) {
        let [row, col] = token.split(',').map(Number)
        if (matrix[row][col] > 0) {
            bunnyDamage += matrix[row][col]
            bunnyKills++
            explode(row, col, matrix)
        }
    }
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] > 0) {
                bunnyDamage += matrix[row][col]
                bunnyKills++
            }
        }
    }
    console.log(bunnyDamage)
    console.log(bunnyKills);


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
bunnyKill( [
                '10 10 10',
                '10 10 10',
                '10 10 10',
                '0,0'
            ]
)