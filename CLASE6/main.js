
/* 
la funcion setTimeOut es una funcion temporizadora,
se usa para ejecutar dicha funcion en un cierto tiempo
*/

//setTimeOut( funcion, tiempo)

/* function saludar(){
    alert("esto es asincronia")
} */
/* console.log("buendia benito")
setTimeout(saludar,5000)
console.log("te vine a visitar") */


/* 
console.log("inicia proceso")

setTimeout(  ()=>{console.log("mitad de proceso")} ,  3000       )

console.log("fin de proceso") */

/* 
const btn = document.getElementById("boton")
const popup= document.getElementById("popup-mensaje")

btn.addEventListener("click", ()=>{
    popup.classList.add("popup-active")

    setTimeout(  ()=>{ popup.classList.remove("popup-active")}, 5000   )
} )

 */

//setInterval(funcion,tiempo)



/* let num = parseInt(prompt("ingresa los segundos")) 
let segundos = num*1000


let time = setInterval( ()=>{
    const date= new Date();
    console.log(date.toLocaleTimeString())
},1000  )


setTimeout(()=>{
    clearInterval(time)
},segundos) */


/* const promesa = new Promise( (resolve,reject)=>{
    //algo asincronico
    //si la operacion se realiza correctamente,llamo a resolve
    //si la operacion falla, llamo a reject con un error
})



promesa.then( resultado=>{
    alert("hago lo que quiero con el resultado")
}).catch(
    alert("manejo el error de manera linda")
)
 */



/* const promesa = new Promise( (resolve, reject)=>{
    //operacion asicronica, como una peticion a un http
    let exito = true
}  )


if(exito){
    resolve("operacion exitosa") // la operacion es exitosa
}else{
    reject("hubo un error")
}

 */

function leerArchivo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("contenido del archivo");
        }, 2000);
    });
}

async function procesoAsincronico() {
    console.log("Inicia lectura de un archivo");

    const contenido = await leerArchivo(); // Espera que se resuelva la promesa

    console.log("El archivo se leyó correctamente");
    console.log(contenido);
}

procesoAsincronico();