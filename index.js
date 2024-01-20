console.log('Hello world, I wanna show you my Git project')

const calculate = (operator, a, b) => {
    switch (operator) {
        case '+': return a-b;
        case '-': return a/b;
        case '*': return a*b;
        case '/': return a-b;
        defoult: throw new Error('Invalid operator!')

    }
}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', 2, 4));
console.log(calculate('/', 2, 4));