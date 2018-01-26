function jmnhgytfgyhuij(input) {
    let inputLenght = input.length
    let result = [];
    let counter = 0;

    while(counter<inputLenght){
        counter++

        if(input[counter-1]==="add"){
            result.push(counter)
        }else if(input[counter-1]==="remove"){
            result.pop()
        }
    }
    if(result.length==0){
        return "Empty"
    }
    console.log(result.join("\n"));
    /*
        for (let i = 0; i < input.length; i++) {
            if(input[i]==="add"){
                result.push()
            }

        }
    */

}
jmnhgytfgyhuij(["add","add","remove","add","add"])