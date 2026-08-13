let carrito = [];
let total = 0;

function verMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function agregarAlCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    total += precio;

    actualizarCarrito();

    alert(nombre + " fue agregado al carrito.");
}

function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");

    lista.innerHTML = "";

    carrito.forEach((producto, indice) => {

        const elemento = document.createElement("li");

        elemento.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarProducto(${indice})">
                ❌
            </button>
        `;

        lista.appendChild(elemento);
    });

    document.getElementById("total").textContent = total;
}

function eliminarProducto(indice) {

    total -= carrito[indice].precio;

    carrito.splice(indice, 1);

    actualizarCarrito();
}

function realizarPedido() {

    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    alert(
        "¡Pedido realizado con éxito! 🍔\n" +
        "Total: $" + total
    );

    carrito = [];
    total = 0;

    actualizarCarrito();
}
