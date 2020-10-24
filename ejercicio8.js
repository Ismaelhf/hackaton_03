// 8. Crea una función usando callbacks que eleve al cuadrado y al cubo un
// numero enviado como parámetro a dicha función


const cuadroCubo = (numero) => {
    let resp = [];
    resp[0] = numero * numero;
    resp[1] = numero * numero * numero;

    return resp;
}

const elevar = (numero, callback) => {
    return callback(numero);
}

console.log(elevar(2, cuadroCubo));