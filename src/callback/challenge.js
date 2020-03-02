let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest
let API =   'https://rickandmortyapi.com/api/character/'//url a la cual haré la peticion
// funcion que hace la petición 
    function fetchData(url_api, callback){
         
        let xhttp = new XMLHttprequest() //referencia al objeto a usar para usarlo como xhttp
        
        // hacer llamado a la url, abrir url,metodo GET, que recibe el parametro url_api,por defecto true
        xhttp.open('GET',url_api,true)

        // escuchar lo que hará la conexión, si el cambió sucede ejecutará una función que recibirá un evento
        xhttp.onreadystatechange = function (event){
            //validando si el estado en el cual se encuentra es satisfactorio
            // 0. inicializado, 1. cargando, 2. ya se cargó, 3. si hay una descarga o info, 4. se completó
            
            //igualar en valor y tipo el evento
            if(xhttp.readyState === 4 ){
                
                //ejecutar una siguiente llamada para conocer el status en el que se encuentra( 200=> todo bien, 400=>no encontró algo, 500=>el servidor regresa falla), hasta este punto se completó la petición al servidor pero no sabemos que respuesta dió
                if(xhttp.status === 200){
                    //aqui recibo la respuesta en texto y o convierto a JSON
                    callback(null, JSON.parse(xhttp.responseText))
                    
                }else{
                    const error = new Error('Error' + url_api) 
                    return callback(error, null)
                }
            }    
        }
        xhttp.send()
    }





fetchData(API,function(error1,data1){

    if(error1) return console.error(error1)
    fetchData(API + data1.results[0].id,function (error2,data2){
        if(error2) return console.error(error2)
        fetchData(data2.origin.url,function(error3,data3){
            if(error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })

})