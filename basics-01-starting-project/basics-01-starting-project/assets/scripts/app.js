const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is' + result);
    return result;
}


currentResult = add(1, 2);
