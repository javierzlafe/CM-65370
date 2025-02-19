


//foreach: ejecuta una funcion para cada elemento del array


/* let frutas = ["manzana","banana","pera"]


frutas.forEach((fruta)=>{console.log(fruta.toUpperCase())})

 */


//map: crea un nuevo array con el resultado de la funcion utilizada

/* const numeros = [1,2,3,4,5]

const doble = numeros.map(  (x)=>x*2 )


console.log(doble) */




const Producto = function(nombre,precio,stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}

let prodcuto1 = new Producto("lenovo",35000000,20)
let prodcuto2 = new Producto("samsung",35000000,20)
let prodcuto3 = new Producto("mac",35000000,20)
let prodcuto4 = new Producto("xioami",35000000,20)

let lista= [prodcuto1,prodcuto2,prodcuto3,prodcuto4]

function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar")
    let resultado = lista.filter((producto)=> producto.nombre.includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        console.log("no se encuentra ninguna coincidencia")
    }
}

