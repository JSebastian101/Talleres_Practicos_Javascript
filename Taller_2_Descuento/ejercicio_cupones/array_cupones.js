function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function clickDiscount () {
    const listaCupones = ["primera_compra", "sus_mensual", "sus_anual",];
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 
    const inputDiscount = document.getElementById("InputCode");
    const cuponValue = inputDiscount.value; 

    let descuento;

    switch(cuponValue){
        case "primera_compra":
            descuento = 15;
        break;
        case "sus_mensual":
            descuento = 25;
        break;
        case "sus_anual":
            descuento = 35;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El resultado del precio con descuento es $ " + precioConDescuento;
}



    