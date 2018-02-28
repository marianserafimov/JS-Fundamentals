function theHungryProgrammer(meals, commands) {
    let eatenMeals = 0;

    for (let command of commands) {
        if(meals.length!==0) {
            if (command === "Serve") {
                let meal = meals.pop()
                console.log(`${meal} served!`)
            }
        }
        if(meals.length!==0) {
            if (command === "Eat") {
                let meal = meals.shift()
                console.log(`${meal} eaten`)
                eatenMeals++
                if (meals.length === 0) {
                    console.log("The food is gone")
                    console.log(`Meals eaten: ${eatenMeals}`);
                    return
                }
            }
        }
        let splitedCommand = command.split(" ")

        if (splitedCommand[0] === "Add") {
            if(splitedCommand.length>1) {
                meals.unshift(splitedCommand[1])
            }
        }
        if(meals.length>=2) {
            if (splitedCommand[0] === "Consume") {
                let startIndex = splitedCommand[1]
                let endIndex = splitedCommand[2]

                if (startIndex < meals.length && endIndex <= meals.length) {
                    for (var i = startIndex; i <= endIndex; i++) {
                        meals.splice(startIndex, 1)
                        eatenMeals++

                    }
                    console.log("Burp!");
                    if (meals.length === 0) {
                        console.log("The food is gone")
                        console.log(`Meals eaten: ${eatenMeals}`);
                        return
                    }
                }
            }
        }
        if(meals.length>=1) {
            if (splitedCommand[0] === "Shift") {

                let firtstElementIndex = splitedCommand[1]
                let secondElementIndex = splitedCommand[2]

                if (firtstElementIndex <= meals.length && secondElementIndex <= meals.length) {
                    let firstElement = meals[firtstElementIndex]
                    let secondElement = meals[secondElementIndex]

                    meals.splice(firtstElementIndex, 1, secondElement)
                    meals.splice(secondElementIndex, 1, firstElement)
                }
            }
        }
        if(meals.length===0&&command === "End"){
            console.log("The food is gone")
            console.log(`Meals eaten: ${eatenMeals}`);
            return
        }
        if (command === "End") {

            console.log(`Meals left: ${meals.join(", ")}`);
            console.log(`Meals eaten: ${eatenMeals}`);
            return
        }
    }
    console.log(meals.join(", "));
    console.log(`Meals eaten: ${eatenMeals}`);
}
theHungryProgrammer([],
    ["End"])