function emplhrgdf(input) {
    let reg = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/gm

    for (let employee of input) {
            let match = reg.exec(employee)
            if (match){
                console.log("Name: " + match[1]);
                console.log("Position: " + match[3]);
                console.log("Salary: " + match[2]);
            }

    }
}
emplhrgdf(["Isacc - 1000 - CEO",
    "Ivan - 500 - Employee",
    "Peter - 500 - Employee"
])