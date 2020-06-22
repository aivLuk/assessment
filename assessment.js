const validSolution = (arr) => {
    arr.forEach(element => {
        const validArr = [];
        const zeroesArr = [];
        element.forEach(el => {
            if (!validArr.includes(el)) {
                validArr.push(el)
            }
            if (el === 0) {
                zeroesArr.push(el)
            }
        })
        if (zeroesArr.length > 0 || validArr.length !== 9) {
            return false;
        } else {
            return true;
        }
    });
}

//the sum that I calculated is 4613732
const fibonacciEvenSum = (number) => {
    let fibArr = [];

    let a, b, c;
    a = 1;
    b = 2;

    fibArr.push(a);
    fibArr.push(b);

    while ((a + b) < number) {
        c = a + b;
        a = b;
        b = c;
        fibArr.push(c);
    }

    let sum = 0;
    fibArr.forEach(el => {
        if (el % 2 === 0) {
            sum = sum + el;
        }
    })
    console.log(sum);
}

fibonacciEvenSum(4000000)