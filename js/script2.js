//productos
const productosAElegir = [
    { id: 1, nombre: "CURSO DE BATERIA", precio: 30 },
    { id: 2, nombre: "CURSO DE GUITARRA", precio: 30 },
    { id: 3, nombre: "CURSO DE PIANO", precio: 30 },
    { id: 4, nombre: "CURSO DE BAJO", precio: 30 },
];

// Obtener y guardar el carrito en el localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// agregar producto al carrito
const agregarProducto = (id, nombre, precio) => {
    const carrito = obtenerCarrito();
    carrito.push({ id, nombre, precio });
    guardarCarrito(carrito);
    mostrarCarrito();
};

// mostrar el carrito en el DOM
const mostrarCarrito = () => {
    const carrito = obtenerCarrito();
    const listaProductos = document.getElementById("lista-productos");
    const totalElement = document.getElementById("total");
    let total = 0;

    listaProductos.innerHTML = "";

    carrito.forEach((producto) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span>${producto.nombre}</span>
        <span>${producto.precio}</span>
        <button onclick="eliminarProducto('${producto.id}')">Eliminar</button>
        `;
        listaProductos.appendChild(listItem);
        total += parseFloat(producto.precio);
    });

    totalElement.textContent = total.toFixed(2);
};

// eliminar un producto del carrito
const eliminarProducto = (id) => {
    const carrito = obtenerCarrito();
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    guardarCarrito(carritoActualizado);
    mostrarCarrito();
};

function limpiarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

// generar dinámicamente los productos en el DOM
const cards = () => {
    const contenedorProductos = document.getElementById("productos");

    productosAElegir.forEach((producto) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${"USD" + producto.precio}</p>
        <button onclick="agregarProducto('${producto.id}', '${producto.nombre}', '${producto.precio}')">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(productoElement);
    });
};

// confirmar la reserva
const BOTON = document.getElementById("boton");

BOTON.addEventListener("click", () => {
    const carrito = obtenerCarrito();
    Swal.fire({
        title: "¿Deseas confirmar la reserva?",
        icon: "warning",
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            guardarCarrito([]);
            mostrarCarrito();
            Swal.fire({
                title: "¡Te enviaremos los detalles por mail",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
        } else {
            Swal.fire({
                title: "Has cancelado la reserva",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });
});

// Mostrar el carrito al cargar página
mostrarCarrito();
cards();

// API Actualizar el valor del dólar
const cotizador = "https://criptoya.com/api/dolar";
const divcotizador = document.getElementById("divcotizador");

setInterval(() => {
    fetch(cotizador)
        .then(response => response.json())
        .then(({ oficial, blue }) => {
            divcotizador.innerHTML = `
            <h3>Valorización del Dólar actual</h3>
            <p>Dólar Oficial: $${oficial.toFixed(2)}</p>
            <p>Dólar Blue: $${blue.toFixed(2)}</p>
            `;
        })
        .catch(error => console.log(error));
}, 2000);