function uniqueWirds(strArr) {
    let unique = new Set()

    strArr.join('\n')
        .split(/\W+/)
        .filter(e => e!=='')
        .map(e => e.toLowerCase())
        .forEach(e=>unique.add((e)))


    console.log([...unique].join(", "));
}