function asd(input) {

    let arrForResult =[];
    for (var i = 0; i < input.length; i++) {
        if(i%2===0||i===0){
            arrForResult.push(input[i]);
        }

    }

    console.log(arrForResult.join(' '));

}
asd(['20', '30', '40'])