function censorship(text, arr) {

    for (let str of arr) {
        let regex = new RegExp(str,'g')
        let dashesh = '-'.repeat(str.length)
        text = text.replace(regex,dashesh)
    }

    console.log(text);

}
censorship('roses are red, violets are blue', [', violets are', 'red'])