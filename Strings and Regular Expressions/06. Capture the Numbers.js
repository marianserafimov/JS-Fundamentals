function koytihjdbgfn(input) {
    let result =[];
    let regex = /\d+/g

    for (let sentence of input) {
        let match = sentence.match(regex)

        if(match){
            for (let maaaach of match) {
                result.push(maaaach)
            }
        }

    }
    console.log(result.join(" "));
}
koytihjdbgfn(["The300","What is that?","I think it’s the 3rd movie.",
    "Lets watch it at 22:45"])
