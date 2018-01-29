function delimtiert(string,delimiter) {
    let result = string.split(delimiter)
    result.forEach(arg=>console.log(arg))
}
delimtiert("One-Two-Three-Four-Five",
    "-")