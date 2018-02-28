function queryMess(arrStr) {

    replaceSpaces(arrStr)
    let regex  = new RegExp(/(\s*([a-zA-Z_0-9]+))\s*=\s*([a-zA-Z:\/*,!?._0-9]+\s*[a-zA-Z:\/*,_.0-9]*)&*/g)
    regexInplementation(arrStr,regex)



















    function regexInplementation() {
        for (let line of arrStr) {
            let match = regex.exec(line)

            let map = new Map()
            while (match) {
                let field = match[2].trim()
                let value = match[3].trim()
                value = value.replace(/[ \t]+/, " ")
                field = field.replace(/[ \t]+/, " ")

                if (!map.has(field)) {
                    map.set(field, [])
                }
                map.get(field).push(value)
                match = regex.exec(line)

            }
            let result = ""
            for (let [field, arrOfValues] of map) {
                result += `${field}=[${arrOfValues.join(", ")}]`
            }
            console.log(result);
        }
    }

    function replaceSpaces(arrStr) {
        for (var i = 0; i < arrStr.length; i++) {
            arrStr[i] = arrStr[i].replace(/%20/g, " ")
            arrStr[i] = arrStr[i].replace(/[+]/g, " ")
        }
        return arrStr
    }
}
queryMess(  [
            'foo=%20foo&value=+val&foo+=5+%20+203',
            'foo=poo%20&value=valley&dog=wow+',
            'url=https://softuni.bg/trainings/coursesinstances/details/1070',
            'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
            ]
        )