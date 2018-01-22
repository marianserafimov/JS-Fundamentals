function sumLastKNumbersSequence(n, k) {
    let arr = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = arr.slice(start, end).map(e=>e+e);
        // TODO: sum the values of seq[start … end]

        arr[current] = sum;
    }
        console.log(arr.join(' '));



}
    sumLastKNumbersSequence(6, 4
    )