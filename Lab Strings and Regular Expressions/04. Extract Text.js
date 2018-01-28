function asdfgdhf(str) {
    let result = [];
    while (true) {
        let start = str.indexOf('(')
        if(start<0){
            break
        }
        let end = str.indexOf(')')
        result.push(str.substring(start, end))
        str = str.substring(end + 1)
    }
    console.log(result.join(", "));
}