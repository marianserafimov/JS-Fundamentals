function gfrhjg(input) {
    let regex = new RegExp(/[a-zA-Z0-9_]+/g)

    let result = input.match(regex)

    console.log(result.join("|"))

}
gfrhjg('A Regular Expression needs to have the global flag in order to match all occurrences in the text')