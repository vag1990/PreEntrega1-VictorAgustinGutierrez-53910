function calculadoraPrecio() {
    
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

    let opcionMesa = document.getElementById("opcionMesa").value;
    let opcionBlend = document.getElementById("opcionBlend").value;
    let cuotas = document.getElementById("cuotas").value;
    console.log(opcionMesa);
    console.log(opcionBlend);
    console.log(cuotas);


    let precioTotal = precios[opcionMesa] + precios [opcionBlend];

    precioTotal = precioTotal * (1 + precios[cuotas]);

    let sorteo = prompt ("INGRESA NRO DE DEL 1 AL 10 Y PARTICIPA POR 50% DESCUENTO")
    if (sorteo == "5"){
        precioTotal = precioTotal = precioTotal - (precioTotal*0.5) + "  (50% descuento incluido.)";
        alert ("GANASTE UN 50% DE DESCUENTO EN TU COMPRA!!!")
    } else if (sorteo != "5")
    alert ("Mejor suerte la proxima compra!!");
    console.log(sorteo);

    console.log("Precio Total es: $" + precioTotal);
    document.getElementById("resultado").innerText = "Precio total: $" + precioTotal;
}


