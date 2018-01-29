function capsogidhfnaDdfs(str) {
    let result = ""

    for (var counter = 0; counter < str.length; counter++) {

        let currentASCII = str.charCodeAt(counter);

        if(counter===0){
            if(currentASCII>=97 && currentASCII<=122){
                result += String.fromCharCode(currentASCII-32)
            }
            else {
                result += String.fromCharCode(currentASCII)
            }
        }
        else if(currentASCII===32){
            result += " "
            counter++;
            let currentASCIIinSpace = str.charCodeAt(counter);
            if(currentASCIIinSpace>=97 && currentASCIIinSpace<=122) {
                result += String.fromCharCode(currentASCIIinSpace - 32)
            }
            else {
                result += String.fromCharCode(currentASCIIinSpace)

            }


        }else{
            if(currentASCII>=65 && currentASCII<=90){
                result += String.fromCharCode(currentASCII+32)
            }
            else {
                result += String.fromCharCode(currentASCII)}
        }


    }
    console.log(result);
}
capsogidhfnaDdfs("Capitalize These Words")