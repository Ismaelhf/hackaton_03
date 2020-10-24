// 1. Crea tu propia función forEach que funcione igual a Array.forEach. Por
// ejemplo: function miForEach(arreglo, callback){ // completa aquí }

let name = ['ismael', 'noel', 'carlos'];

const forArreglo = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}
const miForEach = (arreglo, callback) => {
    return callback(arreglo);
}

miForEach(name, forArreglo);