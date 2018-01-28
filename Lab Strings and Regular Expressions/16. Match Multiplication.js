function matchmulpoi(text) {
    let reg = /([-+]?[0-9]*\.?[0-9]*)([\s]+)?\*([\s]+)?([-+]?[0-9]*\.?[0-9]*)/g

text = text.replace(/(-?\d)\s*\*\s*(-?\d+\.?\d+)/g,(match , a, b)=>Number(a)* Number(b))
    console.log(text);


}
matchmulpoi("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).\n")