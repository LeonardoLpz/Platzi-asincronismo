// este es el archivo de entrada que se lee de acuerdo con la configuración contenida en el archivo package.json

// funcion que suma 2 numeros que entran como parámetros
function sum(num1, num2){
    return num1 + num2

}
// funcion que sirve como callback, entran 2 numeros y una funcion como parametros, retorna la llamada de la funcion con los 2 numeros como parametros
function calc(num1,num2,callback){
    return callback(num1,num2)
}
// imprime en consola la llamada a la funcion calc, y le inserta los parametros de entrada, en este caso 2,2 y la funcion sum
console.log(calc(6,2,sum)) 



function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date
        callback(date)
    },3000)
}


function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)