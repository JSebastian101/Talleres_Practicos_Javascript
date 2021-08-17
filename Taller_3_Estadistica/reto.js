// const notas = [
//     {nota:4.2, creditos: 1},
//     {nota:3.1, creditos:2}, 
//     {nota:5, creditos:4},
//     {nota:2.4, creditos:2},
// ];


function promedioPonderado (notas) {
    const notasxCreditos = notas.map(x => x.nota * x.creditos);
    const creditosFiltrados = notas.map(x => x.creditos);
    let sumaTotal = notasxCreditos.reduce((acc, el) => acc + el, 0);
    let sumaCreditos = creditosFiltrados.reduce ((acc, el) => acc + el, 0);
    let promedio = sumaTotal / sumaCreditos;
    console.log(promedio);
};

console.log(promedioPonderado([{nota:4.2, creditos:1}, {notas:3.1, creditos:2}, {nota:5, creditos:4},]));



