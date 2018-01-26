function fghdyukfdgh(input) {
    let step = Number(input.pop());
    let arr = input.slice(0,input.length)

    let result = []

    for (var i = 0; i < arr.length; i+=step) {
        result.push(arr[i]);

    }
    console.log(result.join("\n"));
}
fghdyukfdgh(["dsa", "asd", "test", "tset", "2"])