/* 

function Producto(id,nombre, importe,stock){
    this.id =id
    this.nombre = nombre
    this.importe = importe
    this.stock = stock
        this.vender = function(){
            if(this.stock <1){
                alert("lo siento ya no hay stock")
            }else{
                alert(`se vendio ${this.nombre}`)
            }
        
        }
}


const producto1 = new Producto(1,"teclado",95000,)
const producto2 = new Producto(1,"telefono",195000,2)
const producto3 = new Producto(1,"monitor",950000,45)

console.log(producto1)


producto1.vender()



 */

/* 
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        alert("hola mi nombre es " + this.nombre)
    }
}


const persona1 = new Persona("javier", 87)


persona1.saludar() */



//storage


/* setItem() crea una clave y asigna un valor
getItem() permite recuperar (ir a buscar) una clave
removeItem() elimina un item
clear() elimina todo 
*/
/* 
sesionStorage.setItem("bienvenida", "hola estudiantes de coder")



function recuperar(){
   const mensaje = localStorage.getItem("bienvenida")
   alert(mensaje)
}

localStorage.removeItem("bienvenida")
localStorage.setItem("bienvenida", "hola estudiantes de javi") */

/* const persona ={
    nombre: "gustavo ortego",
    edad:29,
    ciudad: "punta del este"
}

let pochoclo = JSON.stringify(persona)

localStorage.setItem("persona",pochoclo)s


const traerDatos = JSON.parse(localStorage.getItem("persona"))

console.log(traerDatos) */