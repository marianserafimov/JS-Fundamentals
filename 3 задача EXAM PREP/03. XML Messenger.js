function xmlShtis(string) {
    let strRegex = new RegExp(/^<message((\s*([a-z]+="[a-zA-Z\s.0-9]+")\s*)+)>((?:.)+)\s*<\/message>/g)
    let strMatch = strRegex.exec(string)
    if(!strMatch){
        console.log("Invalid message format");
        return
    }

    let html = "<article>\n"
    let name = ""

    let regexForFrom = /\s*(from="([a-zA-Z\s.0-9]+)")\s*/g
    let matchForFrom = regexForFrom.exec(strMatch[1])
    if(matchForFrom.length<4){
        console.log(`Missing attributes`);
        return
    }else {
        name = matchForFrom[2]
    }
    html +=`  <div>From: <span class="sender">${name}</span></div>\n`


    let regexForTo = /\s*(to="([a-zA-Z\s.0-9]+)")\s*/g
    let matchForTo = regexForTo.exec(strMatch[1])
    if(matchForTo.length<3){
        console.log(`Missing attributes`);
        return
    }else {
        name= matchForTo[2]
    }
    html+=`  <div>To: <span class="recipient">${name}</span></div>\n`
    html+=`  <div>\n`
    let arrOfMessages = strMatch[4].split("\n")
    for (let i = 0; i < arrOfMessages.length; i++) {
        html += `    <p>${arrOfMessages[i]}</p>\n`
    }

    html+="  </div>\n"
    html+="</article>"

    console.log(html);


}
xmlShtis("<message from=\"Alice\" timestamp=\"1497254112\">Same old, same old</message>")