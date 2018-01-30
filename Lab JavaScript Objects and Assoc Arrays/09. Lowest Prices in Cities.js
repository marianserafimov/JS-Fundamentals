function citiesLowestPrice(strArr) {
    let map = new Map()

    for (let line of strArr) {
        let tokens = line.split(" | ");
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if(! map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    for (let [product, mapInside] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPrice = "";
        for (let [town,price] of mapInside) {
            if(lowestPrice>price){
                lowestPrice=price
                townWithLowestPrice=town
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}