function equalNeighborsCount(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length-1; row++)
        for (let col = 0; col < matrix[row].length; col++)
            if (matrix[row][col] == matrix[row + 1][col])
                neighbors++;

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length-1; col++) {
            if(matrix[row][col]== matrix[row][col+1]){
                neighbors++;
            }

        }

    }


    return neighbors;
}