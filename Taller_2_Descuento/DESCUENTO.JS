function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function clickDiscount () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value; 
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El resultado del precio con descuento es $ " + precioConDescuento;
}