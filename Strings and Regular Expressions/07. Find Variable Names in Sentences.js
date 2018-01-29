function findValiergdsNames(input) {
    let regex = /\b_([a-zA-Z]+)\b/g
    let matches = input.match(regex)
    let result = [];
    for (let machh of matches) {
        result.push(machh.substr(1))

    }
    console.log(result.join(","));

}
findValiergdsNames("The _id and _age variables are both integers.")