
/* let frutas = ["manzana","naranja","banana"] */

//indice         0          1         2




/* let frutaPreferida= frutas[1]
 alert(frutaPreferida)

 const num1=[1,2,3,4]
 const num2=[5,6,7,8]

 console.log(num1[2]+num2[1])

 num1[3] = 78

 alert(num1[3]) */




/*  const numeros = [1,2,3,4,5,6,7,8,651,321,651,351,6351,68,6351,351,685,51,321,6841,651,321,6841,651,320,65196,8416,851651,45]

 for(let i =0; i < numeros.length;i++){
    console.log(numeros[i])
}

 */



let frutas = ["manzana","naranja","banana"]

        //pop
/* elimina el ultimo elemento del array */

/* frutas.pop()
console.log(frutas) */



        //push: agrega al final del array el elemento que pasamos como parametro

/* frutas.push("kiwi")

console.log(frutas) */


//shift: elimina el primer elemento
/* frutas.shift() */



//unshift: agrega en el primer elemento lo que pasamos como parametro
/* frutas.unshift("melon") */



//slice(): retorna una copia del array, con los parametros DESDE, HASTA (no toma el ultimo indice)
/* 
const copia= frutas.slice(0,1) */


//splice: elimina el contenido de los elementos

/* 
console.log(frutas.splice(0,1)) */


//concat: une 2 o mas array
/* const perros=["manchita","puqui","negrito"]
const gatos=["michi","salem", "pufy"]

const mascotas = perros.concat(gatos)
console.log(mascotas) */
/* let precios=[12,45,78,89,56,5263,132,365]

precios.sort(
    ((a, b) => a - b)
)
console.log(precios.reverse()) */



//OBJETOS LITERALES


/* const empleado= {
nombre:"javier",
cargo:"profe", 
edad:89
}

const empleado2= {
nombre:"david",
cargo:"adjunto", 
edad:76
}
 */



//EJERCICIO


/* 
prompt, alert, confirm, variables *
bucles,*
funciones,  *
consdicionales, *
*/

/* loguin: ingreso y bienvennida */




function loguear() {
    let identificar = true;
    let intentos = 1;

    do {
        let usuario = prompt("Ingresa tu usuario (solo 3 intentos)");
        if (usuario === null) {
            break;
        }
        if (usuario === "javier gimenez" && intentos <= 3) {
            let contraseña = prompt("Ingresa tu contraseña");
            if (contraseña === null) { 
                break;
            }
            if (contraseña === "1234") {
                alert("Bienvenido usuario " + usuario);
                identificar = false;
            } else {
                alert("Contraseña incorrecta");
                intentos++;
                if (intentos > 3) {
                    alert("Usted superó los 3 intentos, vuelva más tarde");
                    console.error("Contraseña incorrecta");
                    break;
                }
            }
        } else {
            alert("No se reconoce el usuario " + usuario);
            intentos++;
            if (intentos > 3) {
                alert("Usted superó los 3 intentos, vuelva más tarde");
                console.error("No se reconoce el usuario");
                break;
            }
        }
    } while (identificar);
}

loguear();




