function armarTablaCarrito(camiseta) {
    return `<tr>
                <td>${camiseta.nombre}</td>
                <td>$${camiseta.precio}</td>
                <td><button class="button button-outline button-quitar" id="${camiseta.nombre}">X</button></td>
            </tr>`
}

function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("miCarrito")) || [ ];
    if (carrito.length > 0) {
        carrito.forEach(camiseta => {
            tablaHTML += armarTablaCarrito(camiseta)
        });
        tbody.innerHTML = tablaHTML
    }
}
recuperarCarrito()

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    carrito.forEach(prod => {
    localStorage.setItem("miCarrito", JSON.stringify(carrito))
    })
  }

const activarClickQuitarBotones= () => {
    debugger
    const buttonsDelete = document.querySelectorAll("button.button.button-outline.button-quitar")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", (e)=> {
            eliminarDelCarrito(e.target.id)
        })
    })
}