function airForseee(arrStr) {
    let planesLeftMap = new Map() //{plane, land/depart} if land cons log
    let citiesMap = new Map()     //{city, {arrivals:12313},
    let planesInCities = new Map()//    {departures: 12312}}
    //
    //{city, planes that have been there}

    for (let line of arrStr) {
        let [plane, city, populationQuantity, action] = line.split(" ");

        if (action === "land" && planesLeftMap.whereIs !== "land") {
            planesLeftMap.set(plane, {whereIs: action});
            if(!citiesMap.has(city)) {
                citiesMap.set(city, {arrivals: 0, departures: 0})
            }
            populationQuantity = Number(populationQuantity)
            citiesMap.get(city).arrivals += populationQuantity


            planesInCities.set(city, plane)
        }
        if (action === "depart" && !planesLeftMap.has(plane)) {
            continue
        }
    }
    console.log(citiesMap);
}
airForseee(     [
                    "Boeing474 Madrid 300 land",
                    "AirForceOne WashingtonDC 178 land",
                    "Airbus London 265 depart",
                    "ATR72 WashingtonDC 272 land",
                    "ATR72 Madrid 135 depart"
                ]
          )

