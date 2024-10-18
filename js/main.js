document.write("Por: Lesly Becerra");

//Se define la funcion de calcular el factorial para el boton de "calcular factorial"
function factorial1() {
    // Convertir a entero
    var valor = parseInt(document.getElementById("valor").value);
    var factorial = 1;
    var respuesta = "";

    if (valor < 0) {
        respuesta = "Error, ingrese un valor >= 0"; // Mensaje corregido
    } else {
        // Calcular el factorial usando un bucle for
        for (i = 1; i <= valor; i++) {
            //Acumula el producto de todos los números desde 1 hasta "valor", calculando así el factorial.
            factorial *= i;
        }
        //Mensaje de la respuesta
        respuesta = "El factorial de " + valor + " es " + factorial;
    }
    // Muestra el resultado
    document.getElementById("respuesta").innerText = respuesta;
}