function lostAF(keyword, text) {
    let regexForEastNorth = new RegExp(/(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi)
    let regexForMessage = new RegExp(`${keyword}(.*)${keyword}`, "g")

    let match = regexForEastNorth.exec(text)

    let north = ""
    let east = ""
    let message = regexForMessage.exec(text)


    while(match){
        if (match[1].toLowerCase() === "north"){
            north+= match[2] + "." + match[4] + " N"
        }
        else {
            east+= match[2] + "." + match[4] + " E"
        }

        match = regexForEastNorth.exec(text)
    }
    console.log(north);
    console.log(east);
    console.log('Message: ' + message[1]);


}
lostAF('<>',
"o u%&lu43t&^ftgv>< nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b")