function countLetters(box,bottle) {
    let counter = 0;
    let num1 = 0;

    while(num1<box){
        num1+=bottle;
        counter++;
    }
    return counter;
}
