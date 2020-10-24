// 5. Crea tu propia función sort que funcione igual a Array.sort. Por ejemplo:
// function miSort(arreglo, callback).

let number = [11, 5, 88, 15, 0, 78, 1];

const sort = (arreglo) => {
    let temp;
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }

        }

    }
    return arreglo;

}

const miSort = (arreglo, callback) => {
    return callback(arreglo);
}
console.log(miSort(number, sort));