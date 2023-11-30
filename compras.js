
// presentacion
alert(" Tienda Conser On-Line");

class Instrumento {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function calcularPrecioTotal(instrumento, accesorios) {
    let total = instrumento.precio;
    for (let accesorio of accesorios) {
        total += accesorio.precio;
    }
    return total;
}

function ventas() {
    // Información del cliente
    let nombreCliente = prompt("Ingrese su nombre:");
    // solicitar nombre y apellido
// saludo 
alert(`Hola ${nombreCliente}, bienvenido/a !!`);

// Instrumentos disponibles
let guitarra = new Instrumento("Guitarra", 300000);
let piano = new Instrumento("Piano", 850000);
let bajo = new Instrumento("Bajo", 300000);
let bateria = new Instrumento("Bateria", 700000);

// Arrays para almacenar las selecciones del usuario
let instrumentosSeleccionados = [];
let accesoriosSeleccionados = [];

// Seleccionar instrumento
let opcionInstrumento = prompt(`Instrumentos disponibles:\n1. ${guitarra.nombre} - $${guitarra.precio}\n2. ${piano.nombre} - $${piano.precio}\n3. ${bajo.nombre} - $${bajo.precio}\n2. ${bateria.nombre} - $${bateria.precio}\nSeleccione número del instrumento:`);

let instrumentoSeleccionado;
    if (opcionInstrumento == '1') {
        instrumentoSeleccionado = guitarra;
    } else if (opcionInstrumento == '2') {
        instrumentoSeleccionado = piano;
    } else if (opcionInstrumento == '3') {
        instrumentoSeleccionado = bajo;
    } else if (opcionInstrumento == '4') {
        instrumentoSeleccionado = bateria;
    } else {
        alert("Opción no válida.");
        return;
    }
instrumentosSeleccionados.push(instrumentoSeleccionado);

// Seleccionar accesorios
    while (true) {
        let accesorioNombre = prompt("Ingrese un accesorio (o escriba 'fin' para terminar):");
        if (accesorioNombre.toLowerCase() === 'fin') {
            break;
        }
        let accesorioPrecio = parseFloat(prompt("Ingrese el precio del accesorio:"));
        let accesorio = new Instrumento(accesorioNombre, accesorioPrecio);
        accesoriosSeleccionados.push(accesorio);
    }

// Calcular precio total
let precioTotal = calcularPrecioTotal(instrumentoSeleccionado, accesoriosSeleccionados);

// Mostrar información de la transacción
alert(`\nResumen de la compra:\nCliente: ${nombreCliente}\nInstrumento: ${instrumentoSeleccionado.nombre} - $ ${instrumentoSeleccionado.precio}\nAccesorios:\n${accesoriosSeleccionados.map(a => `- ${a.nombre} - $ ${a.precio}`).join('\n')}\nPrecio Total: $ ${precioTotal}\n\n¡Gracias ${nombreCliente} por su compra!`);
}

//función principal
ventas();