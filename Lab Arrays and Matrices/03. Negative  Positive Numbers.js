function asdas(input) {
    let resultArr = [];
    for (let num of input) {
        if(num<0){
            resultArr.unshift(num)
        }else {
            resultArr.push(num)
        }
    }

    for (let num of resultArr) {
        console.log(num);
    }
}
asdas([7, -2, 8, 9])