

// function + nombre+ parametros{ cuerpo de funcion}



/* function saludar(){

    let nombre = prompt("ingresa nombre")
    alert("bienvenido/a "+nombre)

}

saludar() */


/* function login(){
    let usuario = prompt ("ingrese usuario")

    if (usuario != ""){
        alert(`bienvenido ${usuario}`)
    }
} */






let pass = 1234

function saludar(){
    let nombre = prompt("ingresa tu nombre")
    alert(`bienvenido/a ${nombre}`)
    let pass = 1234

}



function decirHola(teclado){
    alert(`bienvenido/a ${teclado}`)

}



function adios(){
    let nombre = prompt("ingresa tu nombre")
    alert(`bienvenido/a ${nombre}`)

}




//funcion convencional
function sumar(numA,numB){

    let resultado = numA+numB
    alert(resultado)
}

sumar(45,798)



//funcion anonima   (va dentro de una variable)

let sumar= function(numA,numB){
    return numA+numB
  
}

alert( sumar(45,32))



let funcionAnonima = function(a,b){
    return a+b
}


let funcionFlecha = (a,b)=>{
    return a+b
}


let x= (a,b)=>a+b





/* 
if = ?
else = : */