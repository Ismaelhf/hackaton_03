// 2. Crea tu propia función map que funcione igual a Array.map. Por ejemplo:
// function miMap(arreglo, callback).

let number = [1, 5, 8];

const map = (arreglo) => {
    let newArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        newArreglo[i] = arreglo[i] * 2;
    }
    return newArreglo;

}

const miMap = (arreglo, callback) => {
    return callback(arreglo);
}

console.log(miMap(number, map));