function calculadoraPrecio() {
    //DATOS
    let precios = {
        h50: 120000,
        hh: 240000,
        ft: 360000,
        dual: 480000,
        a1: 100000,
        a2: 200000,
        a3: 300000,
        a4: 400000,
        cuota0: 0,
        cuotas3: 0.3,
        cuotas6: 0.6       
    };
    // SELECCION DE DATO
    let opcionMesa = document.getElementById("opcionMesa").value;
    let opcionBlend = document.getElementById("opcionBlend").value;
    let cuotas = document.getElementById("cuotas").value;
    //CALCULO

    let precioTotal = precios[opcionMesa] + precios[opcionBlend];
    let precioFinal= precioTotal + (precioTotal* precios[cuotas])
    let entradasorteo = (prompt("Ingresa nro del 1 al 10 y participara por sorteo de 50% de descuento:"));
    if (entradasorteo == "5") {
        precioFinalFinal = precioFinal - (precioFinal*(0.5));
        alert ("Ganaste 50% de descuento!")
    } else {
        alert ("Segui participando con tu proxima compra.")
    } 
    //RESULTADO
    console.log("Precio Total es: " + precioTotal);
    document.getElementById("resultado").innerText = "Precio total: $" + precioTotal;
    document.getElementById("enCuotas").innerText = "Precio total en cuotas: $" + precioFinal;
    document.getElementById("ganadorSorteo").innerText = "GANASTE 50 % DE DESCUENTO: $" + precioFinalFinal;
    
}


