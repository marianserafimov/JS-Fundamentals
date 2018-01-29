function capitalizaTheWords(str) {

    let splitedString = str.split(" ");
        let result ="";
            let counter = 0;
        for (let wordd of str) {
            console.log(wordd);
            let n = str.charCodeAt(counter);

            if(counter===0){
                if(n>=97 && n<=122){
                    result += String.fromCharCode(n-32)
                }

            }else {
                if(n>=65 && n<=90){
                    result += String.fromCharCode(n+32)
                }
            }
            counter++;


    }

    let n = str.charCodeAt(0)
    console.log(n);
    var res = String.fromCharCode(65+1);
    res += String.fromCharCode(65+13)
    console.log(res);
    console.log(result);
}
capitalizaTheWords("are YOU okay")