const carrito = []
const busquedas = [ ]
const imgCarrito = document.getElementById("imgCarrito")
const containerCards = document.getElementById("containerCards")
const inputSearch = document.querySelector("input#inputSearch")
const URL = 'bbdd/camisetas.json'
const camisetas = []

fetch(URL)
    .then((response) => data = response.json())
    .then((data) => camisetas.push(...data)) 
    .then(() => cargarCamisetas(camisetas)) 
    .then(() => activarClickBotones()) 

imgCarrito.src = "img/carrito.jpg"

imgCarrito.addEventListener("mousemove", ()=> {
    let totalProductos = carrito.length
        imgCarrito.title = `${totalProductos} productos en el carrito`
})

function cargarCamisetas(array) {
    let contenido = ""
        if(array.length > 0) {
            array.forEach(camiseta => {
                contenido += retornoCard(camiseta)
            })
            containerCards.innerHTML = contenido 
        }
}


function activarClickBotones() {
    const botonesAdd = document.querySelectorAll(".button-add") 
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = camisetas.find(cami => cami.id === parseInt(btn.id))
                carrito.push(resultado)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
                toast(`Camiseta de ${resultado.nombre} se agregó al carrito`)
        })
    })
}
 
function filtrarCamisetas() {
        let resultado = camisetas.filter(camiseta => camiseta.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
        if (resultado.length > 0) {
            cargarCamisetas(resultado)
            activarClickBotones()
        } else {
            console.warn("No se han encontrado coincidencias.")
        }
}

inputSearch.addEventListener("search", ()=> {
    if (inputSearch.value.trim() !== "") {
        filtrarCamisetas()
        localStorage.setItem("ultimaBusqueda", inputSearch.value.trim())
    } else {
        cargarCamisetas(camisetas)
    }
})

const toast = (text)=> {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: { background:'CornFlowerBlue', fontSize: '17px'}
      }).showToast();
}