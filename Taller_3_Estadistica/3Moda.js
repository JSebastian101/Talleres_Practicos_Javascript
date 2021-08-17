const listaModa = [1,2,1,3,4,5,6,6,6,6,1,2,3,5,6,6,6,6,6];
//Vamos a tranformar el array a un objeto, pero no crearemos una llave por cada uno de nuestros valores. Si no se creará uno por cada diferente número dentro del array.
const ListaModaCount = {};
listaModa.map(
    function(elemento){
        if(ListaModaCount[elemento]){
            ListaModaCount[elemento] += 1;
        } else {
            ListaModaCount[elemento] = 1;
        }
    }
)

const listaarrays = Object.entries(ListaModaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
)
//Objects.entries se envie el objeto que se desea convertir en un array 
const moda = listaarrays[listaarrays.length - 1];
//convetir este codigo en una función
//como encontrar la moda en js