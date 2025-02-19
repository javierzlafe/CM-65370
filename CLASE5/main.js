

/* let parrafo = document.getElementById("parrafo")

parrafo.innerHTML = `<h1>javier gimenez</h1>` */

/* let parrafo = document.createElement("p")


parrafo.innerHTML = `<p>hola gente, como estan</p>`


document.body.appendChild(parrafo)
 */



/* let productos =[
    {id: 1, nombre:"Arroz", precio:120},
    {id: 2, nombre:"pan", precio:120},
    {id: 3, nombre:"huevos", precio:120},
    {id: 3, nombre:"fideos", precio:120},
]


for(const producto of productos ){

    let contenedor = document.createElement("div")

contenedor.innerHTML = `<h3> id: ${producto.id}</h3>
                        <h1> nombre: ${producto.nombre}</h1>
                        <p> precio: ${producto.precio}</p>`
document.body.appendChild(contenedor)

}
 */



let boton = document.getElementById("boton")

let titulo = document.getElementById("titulo")

//elemento.evento("tipo de evento", funcion)



titulo.addEventListener("mouseover", ()=>console.log("disparo la funcion desde el titulo"))


boton.addEventListener("click", ()=>console.log("disparo la funcion"))








