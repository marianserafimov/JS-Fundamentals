function kitodarTheMiner(input) {
    let silver = 0
    let gold = 0
    let diamonds = 0
    for (let line of input) {
       let regex = /\s+-\s+(gold|silver|diamonds)\s*:\s*(\d+)/g

        let match = regex.exec(line)
        if(match){
           if(match[1] === "silver"){
                silver += Number(match[2])
            }
            if(match[1] === "gold"){
                gold += Number(match[2])
            }
            if(match[1] === "diamonds"){
                diamonds += Number(match[2])
            }
        }
    }

    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamonds}`);
}
kitodarTheMiner([
    'mine bobovdol - gold: 10',
    'mine - diamonds: 5',
    'mine colas - wood: 10',
    'mine myMine - silver:  14',
    'mine silver:14 - silver: 14'
                ])