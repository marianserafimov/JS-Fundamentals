function asdasd(arr) {
    console.log(arr.filter((a, i) => i % 2 == 1)
        .map(b => b * 2)
        .reverse()
        .join(" "));



}
asdasd([10, 15, 20, 25])