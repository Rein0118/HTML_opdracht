function math1 (number1, number2){
return (number1 ** 2 + number2 ** 2) ** 2
}

console.log(math1(2, 2));

const math2 = function (number1, number2) {
    return (number1 ** 2 + number2 ** 2) ** 2
};

console.log(math2(2, 2))

const math3 = (number1, number2) => {
    return (number1 ** 2 + number2 ** 2) ** 2
};

console.log(math3(2, 2))