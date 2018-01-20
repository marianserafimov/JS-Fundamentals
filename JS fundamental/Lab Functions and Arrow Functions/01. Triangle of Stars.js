function starsTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i).trim());
    }
    for (let i = n - 1; i > 0; i--) {
        console.log("*".repeat(i).trim());
    }
}



