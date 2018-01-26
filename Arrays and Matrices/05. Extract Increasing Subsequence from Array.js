function kjdgsdg(input) {
    console.log(input[0])



    for (var i = 1; i < input.length; i++) {
        if(input[i]>= input[i-1]){
            console.log(input[i])
        }

    }

}
kjdgsdg([1,5,5,8,6,0])