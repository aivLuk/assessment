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