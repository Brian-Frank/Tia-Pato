let contenido = $ ('#content');
let cart = [];
function renderCard (producto) {
    let content = `
    <div class="card border-primary mb-5" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="productos">
        <div class="card-body text-center">
            <p class="card-text">${producto.title}</p>
            <p class="card-text">$${producto.precio}</p>
            <button class="btn btn-outline-dark" id=${producto.id}>Add to cart</button>
        </div>
    </div>`
    contenido.append(content)
}

for (const producto of productos){
    renderCard(producto)
}

let botones = document.querySelectorAll("button")
for (const boton of botones) {
    boton.addEventListener('click', (evento) =>{
        console.log(evento.target.id)
        let productoAgregar = productos.find(producto => producto.id === evento.target.id)
        cart.push (productoAgregar)
        console.log(cart)
    })
}
