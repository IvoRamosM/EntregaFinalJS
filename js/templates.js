function retornoCard(camiseta) {
    return  `<div class="card" id="card${camiseta.id}">
                <div class="card-image"><img src="${camiseta.imagen}"></div>
                <div class="card-name">${camiseta.nombre}</div>
                <div class="card-price">$ ${camiseta.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${camiseta.id}"" title="Clic para agregar '${camiseta.nombre}' al carrito">+</button>
                </div>
                </div>`
    }
    
    function retornoError() {
    return `<div class="card-error">
                <h2>Hubo un incoveniente al cargar la camiseta</h2>
                <h3>Intenta nuevamente en unos instantes...</h3>
            </div>`
    }