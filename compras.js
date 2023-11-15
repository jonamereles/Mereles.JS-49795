let nombreApellido;
let precios;
let metodoPago;
let costo;
let costoTotal = 0;
let gigas;
let otraCompra;
const SI = 'si';


// presentacion
alert(" Tienda MemoDrive");
// solicitar nombre y apellido
nombreApellido = prompt("Por favor, ingrese su nombre y apellido:");
// saludo 
alert(`Hola ${nombreApellido}, bienvenido/a !!`);
// precio de gigas
precios = {
4: 6,
8: 11,
16: 14,
32: 25,
64: 42,
128: 70,
256: 120
};
// método de pago
metodoPago = prompt("Por favor, elija su método de pago: debito, credito, transferencia.");

//lista de precios
do {
alert(`MEMORIAS DISPONIBLES:\n
    4 GIGAS - 6 U$S.
    8 GIGAS - 11 U$S 
    16 GIGAS - 14 U$S
    32 GIGAS - 25 U$S
    64 GIGAS - 42 U$S
    128 GIGAS - 70 U$S
    256 GIGAS . 120 U$S\n`);

  //eleccion
gigas = +prompt("Ingrese los gigas que desea comprar:");

if (gigas in precios) {
    const costototal = precios[gigas];
    
    // detalle de la compra
    alert(`Resumen de la compra:\nGIGAS: ${gigas}\nCOSTO TOTAL: ${costototal} DÓLARES`);
    otraCompra = prompt('¿Desea modificar su elección? (si/no)').toLowerCase();
    if (otraCompra !== SI) {
    alert('Gracias por su compra.');
    break;}
} else {
    // si la opcion no es correcta
    alert("cantitad de gigas no válida. Por favor, elija otra opcion.");
}
} while (true);