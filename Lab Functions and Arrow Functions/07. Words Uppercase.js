function tpUpper(str){

    console.log(str.toUpperCase()
        .split(/\W+/)
        .filter(x => x !== '')
        .join(', '));
}