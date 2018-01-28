function gdhfsadAFSGD(arr) {

    let result = [];
    for (var i = 0; i < arr.length; i++) {

        let token = arr[i].split('@')
        let nameBeforeDomains = token[0]+"."

        let domains = token[1].split('.')

        for (let str of domains) {
            nameBeforeDomains+=str[0]
        }

        result.push(nameBeforeDomains)
    }
    console.log(result.join(", "));
}
gdhfsadAFSGD(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])