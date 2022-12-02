
            //buscar usando button.id el producto en el array carrito.
            //hay que utilizar findIndex() porque necesitamos el índice del producto
            //luego con el método splice(), elimino el índice recuperado del carrito.
            //debemos declarar carrito de forma GLOBAL.
function armarTablaCarrito(camiseta) {
    return `<tr>
                <td>${camiseta.nombre}</td>
                <td>$${camiseta.precio}</td>
                <td><button class="button button-outline button-add" id="${camiseta.nombre}">X</button></td>
            </tr>`
}

function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))
    if (carrito.length > 0) {
        carrito.forEach(camiseta => {
            tablaHTML += armarTablaCarrito(camiseta)
        });
        tbody.innerHTML = tablaHTML
    }
}
recuperarCarrito()

function activarBotonQuitar() {
    const buttonsDelete = document.querySelectorAll("button.button-outline.button-add")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
            const camiseta = carrito.find((camiseta) => camiseta.id === id)
            carrito.splice(carrito.indexOf(camiseta), 1)

        })
    })
}