//La meta de esta clase es calcular la media de la const lista1
const lista1 = [
    100,
    200,
    300,
    500,
];

//Usaremos un ciclo for para sumar los números 
  //variable let para cambiarla en el futuro (ciclo for)
// Ciclo en el que se hará lop siempre y cuando i sea menor al número de elementos de la lista
//lista1.length, y sumamos 1 a i por cada vez que se ejecute nuestro ciclo.
//Aca sumaremos a nuestra sumaLista 1, el valor de cada elemento del array, que es llamado con i.
//Así iniciando suma lista será igual a cero y se le sumará el valor en posición 0 de array. En el segundo loop
//nuestro valor será de 100, y este será sumano más el segundo elemento del array. y continuará de esta manera hasta que no se ejecute más el codigo
// let sumaLista1 =0;
// for (let i =0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 = sumaLista1 / lista1.length;


function promedios (lista) {
    // let suma = 0;
    // for (let i=0; i < lista.length; i++) {
    //     suma = suma + lista[i];
    // }
    const suma = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = suma / lista.length;
    return promedioLista;
}
//REDUCE
// Es un método que tienen los arreglos (arrays) recibe dos argumentos, el primero es un valor que está siendo acumulado y el segundo es el que se está iterando del arreglo
// Finalmente esta función devuele el  nuevo elemento que se está acumulando.  



//Existe una alternativa al ciclo for, tenemos metodos dentro de los arrays con los que se peude interar dentro de cada uno de los elementos.
//El método reduce: este método, va a recibir una función. enviamos como argumento una función y este método nos permite ir sumando cada uno de nuestros elementos.
// function promedios (lista){
//     const sumaLista = lista.reduce( //1
//         function(valorAcumulado = 0, nuevoElemento) { //2
//             return valorAcumulado + nuevoElemento; //3
//         }
//     )
//     const promedioLista = sumaLista / lista.lenght;
//     return promedioLista;
// }

//1 En la constante sumaLista llamamos al parametro de la función promedios y adicional llamamos a un método llamado reduce. 
//este método recibe una función (como argumento se envía función al método) y este nos permite ir sumando cada uno de los elementos que haya dentro de la lista.
// 2 Esta fnción recibe dos parametros, el valor acumulado que es la suma de nuestras iteraciones, ya que al principio no tiene valor se le asigna cero, es decir que cuando js no nos de un valor para valor acumulado será por defecto 0
// Un segundo parametro, nuevoElemento
// 3 Retornamos el valor sumado 
// Nota: Este método va a recibir una función y este método permite ir sumando cada uno de nuestros elementos. Recibimos el primer elmento y nos permite sumarlo con el segundo y así con cada uno de nuestros elementos
// valor acumulado, lo que se vaya sumando en cada una de nuestras iteraciones. En valor acumulado vamos a recibir lo que hayamos recibido de nuesta función anonima en cada iteración, pero al ser la primera iteración no valor, se pondrá un valor por defecto. 