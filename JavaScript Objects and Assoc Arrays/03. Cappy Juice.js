function cappyJuice(input) {
    let juices = new Map()

    for (let line of input) {
        let [fruit, quantity] = line.split(' => ')

        if(!juices.has(fruit)){
            juices.set(fruit, 0)
        }

        juices.set(fruit,juices.get(fruit) + Number(quantity))
    }


    for (let [fruit, fruitQuantity] of juices) {
        let bottleQuantity = 0;

        if(fruitQuantity>=1000) {
            do {
                fruitQuantity -= 1000
                bottleQuantity++

            } while (fruitQuantity >= 1000)
        }

        if(bottleQuantity!==0){
            console.log(`${fruit} => ${bottleQuantity}`);
        }

    }

}
cappyJuice( ['Orange => 2000',
            'Peach => 1432',
            'Banana => 450',
            'Peach => 600',
            'Strawberry => 549']
            )