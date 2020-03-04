const someThingWillHappen = () => {
    return new Promise((resolve, reject) =>{

        if(true){
            resolve('Hey!')
        }else{
            reject('Whoops!')
        }

    })

}


someThingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))


const someThingWillHappen2 = () => {
     return new Promise((resolve,reject) => {

        if (true){
            setTimeout( () => {
                resolve('True')

            },2000)
        }else {
            const error = new Error ('Whoops2')
            reject(error)
        }
     })
}

someThingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))




Promise.all([someThingWillHappen(),someThingWillHappen2()])    
    .then(response => {
        console.log('Array de resultados',response)
    })
    .catch(err => {
        console.error(errr)
    })