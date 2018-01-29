function endWithAsdb(mainString, subsString) {
    let counterOfSubsString = 0;
    for (var i = 0; i < subsString.length; i++) {
        counterOfSubsString++;
    }

    let counterOfMainString = 0;
    for (var i = 0; i < mainString.length; i++) {
        counterOfMainString++
    }

    let startCutString = counterOfMainString- counterOfSubsString;
    let cutedMainString = mainString.substr(startCutString,counterOfMainString)

    if(subsString===cutedMainString) {
        console.log("true");
    }else {
        console.log("false");
    }
}
endWithAsdb("This sentence ends with fun?","fun?")