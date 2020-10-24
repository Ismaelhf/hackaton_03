// 7. Crea una función usando callbacks que haga el incremento de valores en
// un array (aumentar en uno cada elemento del array).

let number = [11, 5, 88, 15, 0, 78, 1];

const incremento = (number) => {
    for (let i = 0; i < number.length; i++) {
        number[i] = number[i] + 1;

    }
    return number;
}

const aumento = (number, callback) => {
    return callback(number);
}

console.log(aumento(number, incremento));