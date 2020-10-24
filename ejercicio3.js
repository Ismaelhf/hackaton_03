// 3. Crea tu propia función filter que funcione igual a Array.filter. Por ejemplo:
// function miFilter(arreglo, filter).

let number = [1, 5, 8, 15, 0, 78];
const filterMayor = (arreglo, condicion) => {
    let newArreglo = [];
    let j = 0;
    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] > condicion) {
            newArreglo[j] = arreglo[i];
            j++;
        }

    }
    return newArreglo;
}

const miFilter = (arreglo, condicion, callback) => {
    return callback(arreglo, condicion);
}

console.log(miFilter(number, 5, filterMayor));