function asdasd(input) {
    let number = Number(input[0]);
    
    function chop(number) {
        return number/2;
    }
    function dice(number) {
        return Math.sqrt(number)
    }
    function spice(number) {
        return number+=1
    }
    function bake(number) {
        return number*3
    }
    function fillet(number) {
        return number -((number/100)*20)
    }



    for (var i = 1; i < input.length; i++) {
        switch (input[i]) {
            case "chop":
                number = chop(number);
                console.log(number);
                break;
            case "dice":
                number = dice(number);
                console.log(number);
                break;
            case "spice":
                number = spice(number);
                console.log(number);
                break;
            case "bake":
                number = bake(number);
                console.log(number);
                break;
            case "fillet":
                number = fillet(number);
                console.log(number);
                break;
        }

    }


}
