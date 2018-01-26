function magicMatrices(input) {

    let sum = input[0].reduce((a,b) => a+b);
    let isMagic = true;

    for(let i=1; i<input.length; i++) {
        if(sum != input[i].reduce((a,b) => a+b)) {
            isMagic = false;
        }
    }

    for(let col=0; col<input[0].length; col++) {
        let sumCol = 0;
        for(let row=0; row<input.length; row++) {
            sumCol += input[row][col];
        }

        if(sumCol != sum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])