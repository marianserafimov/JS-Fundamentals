function properties(input) {

    let x1 = String(input[0]);
    let x2 = String(input[1]);
    let x3 = String(input[2]);
    let x4 = String(input[3]);
    let x5 = String(input[4]);
    let x6 = String(input[5]);

    return JSON.parse(`{ "${x1}": "${x2}", "${x3}": "${x4}", "${x5}": "${x6}" }`)
}