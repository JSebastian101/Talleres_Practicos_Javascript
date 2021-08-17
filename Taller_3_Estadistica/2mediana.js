function promedios (lista) {
    const suma = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = suma / lista.length;
    return promedioLista;
}


function CalcularMediana (listaM)
{
    function comparación (a,b) { return a - b}
    listaM.sort(comparación);
    console.log(listaM)
    const mitadlistaM = parseInt(listaM.length /2)
    function esPar(numero)
    {
        if (numero % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    let mediana;
    if (esPar(listaM.length)){
        const elemento1 = listaM[mitadlistaM];
        const elemento2 = listaM[mitadlistaM - 1] ;
        const promedio1y2 = promedios ([elemento1, elemento2])
        mediana = promedio1y2;
        console.log(mediana)
    } else {
        mediana = listaM[mitadlistaM];
        console.log(mediana)
    }
}


// const listaM = [1,4,5,7,11,43,13,15,64,12,5,12];
// const mitadlistaM = parseInt(listaM.length / 2)
// function esPar(numero)
// {
//     if (numero % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// let mediana;
// if (esPar(listaM.length)){
//     const elemento1 = listaM[mitadlistaM];
//     const elemento2 = listaM[mitadlistaM - 1] ;
//     const promedio1y2 = promedios ([elemento1, elemento2])
//     mediana = promedio1y2;
// } else {
//     mediana = listaM[mitadlistaM];
// }


//convertir una función para calcular todo con múltiples listas
// segundo reto: Hay una posibilidad de mejora, la lista tiene que estar ordenada. Ordenar la lista de empezar a ver los elementos
// Usar el método sort de los arrays