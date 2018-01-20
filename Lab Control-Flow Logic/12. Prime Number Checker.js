function cone(n) {
    let result = 0;
    if(n===1){
        return "false"
    }
    if(n===2||n===3){
        return "true"
    }
    if(n%2===0||n%3===0){
        result++;
    }
    if(result===0){
        return "true"
    }
    return "false"
}