function parachuteDoingSomething(input) {
    let position = 0;





    for (let row = 0; row < input.length ; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] === "o") {
                position =  col
            }
            if (input[row][col] === "<") {
                position--
            }
            if (input[row][col] === ">") {
                position++
            }
            if(input[row][position] === "/" || input[row][position] === "\\"){
                console.log("Got smacked on the rock like a dog!")
                console.log(row + " " + position)
                return
            }
        }
    }



    console.log(position);


}
parachuteDoingSomething ([
                                '-------------o-<<--------',
                                '-------->>>>>------------',
                                '---------------->-<---<--',
                                '------<<<<<-------/\\--<--',
                                '--------------<--/-<\\----',
                                '>>--------/\\----/<-<-\\---',
                                '---------/<-\\--/------\\--',
                                '<-------/----\\/--------\\-',
                                '\\------/--------------<-\\',
                                '-\\___~/------<-----------'
])
parachuteDoingSomething([
    '--o----------------------',
    '>------------------------',
    '>------------------------',
    '>-----------------/\\-----',
    '-----------------/--\\----',
    '>---------/\\----/----\\---',
    '---------/--\\--/------\\--',
    '<-------/----\\/--------\\-',
    '\\------/----------------\\',
    '-\\____/------------------',
])