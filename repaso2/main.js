
const Producto = function(nombre,precio,stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}

let prodcuto1 = new Producto("lenovo",35000000,20)
let prodcuto2 = new Producto("samsung",35000000,20)
let prodcuto3 = new Producto("mac",35000000,20)
let prodcuto4 = new Producto("xiaomi",35000000,20)

let lista= [prodcuto1,prodcuto2,prodcuto3,prodcuto4]





function filtrarProductos() {   
    const body = document.querySelector('body');
  
    const input = document.getElementById('filtrarProducto').value
  
    const palabraClave = input.trim().toUpperCase();
  
    const resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));
  
    if (resultado.length > 0) {
      const container = document.createElement('div');
      container.classList.add('card-container');
  
      resultado.forEach((producto) => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
  
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);
  
        const stock = document.createElement('p');
        stock.textContent = `Stock: ${producto.stock}`;
        card.appendChild(stock);
  
        container.appendChild(card);
      });
  
      body.appendChild(container);
    } else {
      alert('No se encontraron coincidencias');
    }
  }

//botonera

let boton = document.getElementById("filtrar")

boton.addEventListener("click",filtrarProductos )