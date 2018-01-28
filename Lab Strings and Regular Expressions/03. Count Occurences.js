function countOccurences(str, text) {
    let counter = 0;
    while(true) {
        let startIndex = str.indexOf(text)
        if(startIndex<0){
            break
        }
        counter++
        str = str.substr(startIndex+1)
    }

    console.log(Number(counter));
}
countOccurences(['the', 'The quick brown fox jumps over the lay dog.'])