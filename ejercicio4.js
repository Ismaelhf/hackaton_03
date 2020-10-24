// 4. Crea tu propia función reduce que funcione igual a Array.reduce. Por
// ejemplo: function miReduce(arreglo, reduce).
let number = [1, 5, 8, 15, 0, 78];
const reduce = (arreglo) => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i];

    }
    return suma;
}

const miReduce = (arreglo, reduce) => {
    return reduce(arreglo);
}

console.log(miReduce(number, reduce));