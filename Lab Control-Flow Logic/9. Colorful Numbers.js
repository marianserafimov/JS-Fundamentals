function cone(n) {
    console.log('<ul>')
    let counter = 1;
    while (counter<=n){
        if(counter%2===0){
            console.log("<li><span style='color:blue'>"+counter+"</span></li>")
            counter++;
        }
        else{
            console.log("<li><span style='color:green'>"+counter+"</span></li>")
            counter++;
        }
    }
    console.log('<ul>')
}