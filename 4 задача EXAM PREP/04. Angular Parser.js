function angularSubscriber(input) {
    let persons = new Map()
    for (let line of input) {
        if (line.length === 1) {
            if (!persons.has(line)) {
                persons.set(line, [])
            }
        }
        if (line.length === 3) {
            let [subscriber, personInIf] = line.split("-")
            if (subscriber !== personInIf) {
                if (persons.has(personInIf)) {
                    persons.get(personInIf).push(subscriber)

                }
            }
        }
    }
    console.log(Array.from(persons).sort((a, b) => {
        let resultCode = b[1].length - a[1].length
        if (resultCode===0) {
            return 0
        }
        else {
            return resultCode
        }
    }))

    /*for (let [person, setOfSubs] of persons) {
        console.log(person);
        for (let sub of setOfSubs) {
            console.log(person + " -> " + sub)
        }


    }*/
}
/*angularSubscriber([
                    'A',
                    'B',
                    'C',
                    'D',
                    'A-B',
                    'B-A',
                    'C-A',
                    'D-A'
])*/
angularSubscriber( [
                    'R',
                    'G',
                    'P',
                    'J',
                    'C',
                    'J-G',
                    'G-J',
                    'P-R',
                    'R-P',
                    'C-J'
])