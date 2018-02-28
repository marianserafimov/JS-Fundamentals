function buildAWall(wall) {
    wall.map(a => Number(a))

    let concrete = [];

    while(true){
        let buildOn = false
        let dailyConcrete = 0

        for (var i = 0; i < wall.length; i++) {
            if(wall[i] !== 30){
                dailyConcrete += 195
                wall[i]++
                buildOn = true
            }

        }
        if(!buildOn){
            break
        }else{
            concrete.push(dailyConcrete)
        }
    }

    let sumOfConcrete = concrete.reduce(((a, b) => a + b)) * 1900
    console.log(concrete.join(", "))
    console.log(sumOfConcrete + " pesos");
}
buildAWall(["17"])