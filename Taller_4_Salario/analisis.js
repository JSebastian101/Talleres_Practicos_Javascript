//con formula de clase
const salariosCol = colombia.map(
    function(persona){
        return persona.salary
    }
)

//Con arrow Function
// const salariosCol = colombia.map (x => x.salary);
// console.log(salariosCol)

// Sort para organizar los salarios en orden ascendente
const salarioColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB
    }
);
console.log(salarioColSorted)

//Mediana = condicional para conocer si la lista es par o impar 
function esPar(x){
    return (x %2 === 0)
}
// Función de Promedio (suma de todos los valores y la división de dicha suma entre la cantidad de valores)
function promedios (lista) {
    const suma = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = suma / lista.length;
    return promedioLista;
}

function CalcularMediana (lista)
{
    function comparación (a,b) {return a - b}
    lista.sort(comparación);
    console.log(lista)
    const mitadlistaM = parseInt(lista.length /2)
    function esPar(numero)
    {
        if (numero % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    let mediana;
    if (esPar(lista.length)){
        const elemento1 = lista[mitadlistaM];
        const elemento2 = lista[mitadlistaM - 1] ;
        const promedio1y2 = promedios ([elemento1, elemento2])
        mediana = promedio1y2;
        console.log(mediana)
    } else {
        mediana = lista[mitadlistaM];
        console.log(mediana)
    }
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = CalcularMediana([personaMitad1, personaMitad2]);
        return mediana
    } else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

const medianaGeneralCol = medianaSalarios(salarioColSorted);

//Mediana top 10%
//Separar de nuestro array de salarios ordenados, las últimas posiciones. aquello que represente el 10%

const spliceStart = (salarioColSorted.length * 90)/100;
const spliceCount = salarioColSorted.length - spliceStart;
const salariosColTop10 = salarioColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log(
    medianaGeneralCol,
    medianaTop10Col,
);
