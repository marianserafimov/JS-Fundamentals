function thePyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0
    let gold = 0

    let steps = 0
    let iterations =1

    for (var i = base; i >0; i-=2) {
        if(i>2){
            if(iterations%5===0){
                let fullArea = i*i
                let areaOfStone = ((i-2) * (i -2))
                let areaOfLapis = (fullArea - areaOfStone)*increment;

                stone+=areaOfStone*increment
                lapisLazuli+=areaOfLapis
            }else{
                let fullArea = i*i
                let areaOfStone = ((i-2) * (i -2))
                let areaOfMarble = (fullArea - areaOfStone)*increment;

                stone+=areaOfStone*increment
                marble+=areaOfMarble
            }
        }else{
            gold+=(i*i)*increment
        }
        steps++
        iterations++
    }

    let pyramidHeight = steps*increment

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`)
}

thePyramid(11, 0.75)