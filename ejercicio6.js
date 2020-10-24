// 6. Crea una función usando callbacks, que reciba una condición, y dos
// funciones que se realicen en caso la condición se cumpla o no.

const realizarLlamada = (persona) => {
    return `llamando a ${persona}`;
}
const colgarLlamada = (persona) => {
    return `colgando a ${persona}`;
}



const callbacksCondicion = (condition, persona, realizarLlamada, colgarLlamada) => {
    if (condition === 1) {
        return realizarLlamada(persona);
    } else if (condition === 2) {
        return colgarLlamada(persona);
    }

}


console.log(callbacksCondicion(1, "Ismael", realizarLlamada, colgarLlamada));
console.log(callbacksCondicion(2, "Ismael", realizarLlamada, colgarLlamada));