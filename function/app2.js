


// var persona = { 

//  nombre : "Juan",
//  direccion :{
//             pais: "Argentina",
//             cuidad: "Córdoba",
//             dtpo: "Santa María",
//             edificio:{ 
//                 nombre: "Edificio shearoton",
//                 telefono: "0351-4981683"
//                 }
//             }
//         };


// console.log(persona.direccion);
// console.log(persona.direccion.cuidad);
// var edificio = persona.direccion.edificio;
// edificio.nroPiso = "8° piso";




function obtenerAleatorio(){
    return Math.random();
}


function obtenerNombre(){
return "Juan";
}

console.log(obtenerNombre() + " Padilla" );


function esMayor05(){
    if (obtenerAleatorio() > 0.5 ){
        return true;
    }else{
        return false;
    }
}
console.log(esMayor05());

function crearPersona(nombre , apellido){
return {
    nombre:nombre,
    apellido:apellido
}
}

var persona = crearPersona ("Maria","Paz");

function crearFuncion(){

    return function (nombre){
        console.log("Me creo " + nombre);
    
    return function(){
        console.log("Segunda funcion");        
        }
    }
}

var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion ( persona.nombre  );
segundaFuncion();

