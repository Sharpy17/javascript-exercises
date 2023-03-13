const fibonacci = (count) => {
    if (count > 0) {
        let a = 0
        let b = 1
        for (let i = 1; i < count; i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    } else if (count === 0) {
        return 0;
    } else {
        return "OOPS";
    }
};


// Do not edit below this line
module.exports = fibonacci;
