const adultCheck = function (age) {
    if (age >= 18){
        return "Hello there"
    }
    return "Hello kiddo"
};

// console.log(adultCheck(16));

const sayHello = function (age) {
    const adult = adultCheck(age)
        console.log (adult)
};

sayHello(18);

