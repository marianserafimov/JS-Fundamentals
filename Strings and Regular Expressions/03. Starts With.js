function checkIf(originalString, subsString) {
        let counter = 0;
    for (var i = 0; i < subsString.length; i++) {
        counter++;

    }

    let result = originalString.substring(0,counter)
    if(result===subsString){
        console.log("true");
    }else{
        console.log("false");
    }
}
checkIf("How have you been?","How")