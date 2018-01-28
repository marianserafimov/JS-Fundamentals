function adfgkhletwsf(input) {
    let regex =/(\b[0-9]{1,2})-([A-Z]{1}[a-z]{2})-([0-9]{4,4})/gm;
let dates = []
    for (let sentence of input) {
    let match;
        while(match = regex.exec(sentence)){
            dates.push(match[0] + " (Day: " + match[1] + ", Month: "
                + match[2] + ", Year: " + match[3] + ")")

        }
    }
    console.log(dates.join("\n"))
}
adfgkhletwsf(["I am born on 30-Dec-1994.\n",
    "This is not date: 512-Jan-1996.\n",
"My father is born on the 29-Jul-1955.\n"])