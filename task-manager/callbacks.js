const worker = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(1)
        reject("error")
    }, 2000)
})

worker.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})