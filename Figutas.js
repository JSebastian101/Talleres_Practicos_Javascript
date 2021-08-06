//Cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
}
function areaCuadrado (lado){
    return lado * lado;
}
//Triangulo
function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura) {
    return (base * altura)/2;
}
//Circulo
function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Interacción con HTML 
//CUADRADO
function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularáreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
//TRIANGULO 
function calcularPerimetroTriangulo () {
    const lado = document.getElementById("InputTriangulo");
    const base = document.getElementById("InputBaseTriangulo");
    const valueLado = Number(lado.value);
    const valueBase = Number(base.value);
    const perimetro = perimetroTriangulo(valueLado, valueLado, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo () {
    const lado = document.getElementById("InputTriangulo");
    const base = document.getElementById("InputBaseTriangulo");
    const valueLado = Number(lado.value);
    const valueBase = Number(base.value);
    const altura = Math.sqrt((Math.pow(valueLado,2) - Math.pow((valueBase/2),2)));
    const area = areaTriangulo (valueBase,altura);
    alert(area);
}
//CIRCULO
function calcularDiametro() {
    const radio = document.getElementById("InputCirculo");
    const value = Number(radio.value);
    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetro() {
    const radio = document.getElementById("InputCirculo");
    const value = Number(radio.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
//
function trianguloIsosceles(){
    const lado1 = document.getElementById("InputTrianguloI");
    const lado2 = document.getElementById("InputTrianguloI2");
    const base = document.getElementById("InputBaseTrianguloI");
    const valueLado = Number(lado1.value);
    const valueLado2 = Number(lado2.value);
    const valueBase = Number(base.value);
    if (valueLado == valueLado2 && valueLado!=valueBase){
        const altura = Math.sqrt((Math.pow(valueLado,2) - Math.pow((valueBase/2),2)));
            alert(altura);
    } else {
        alert("Recuerda, un triangulo isósceles tiene su lados iguales y su base es distinta");
    }    
}