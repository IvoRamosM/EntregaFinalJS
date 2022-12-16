
const carrito = JSON.parse(localStorage.getItem("miCarrito")) || [];
const precioTotal = document.getElementById('total-carrito')

function armarTablaCarrito(camiseta) {
    return `<tr>
                <td>${camiseta.nombre}</td>
                <td>$${camiseta.precio}</td>
                <td></td>
            </tr>`

}

function recuperarCarrito() {
	let tablaHTML = "";
	const tbody = document.querySelector("tbody");
	const carrito = JSON.parse(localStorage.getItem("miCarrito")) || [];
	carrito.forEach((camiseta) => {
		tablaHTML += armarTablaCarrito(camiseta);
	});
	tbody.innerHTML = tablaHTML;
}
recuperarCarrito()

const botonVaciar = document.getElementById('btn-vaciar')
botonVaciar.addEventListener('click', () => {
    localStorage.clear()
    console.log(localStorage)
    precioTotal.innerText = 0
    recuperarCarrito()
    
})

precioTotal.innerText = carrito.reduce((acc, camiseta) => acc + camiseta.precio, 0)

