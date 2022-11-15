

const promise=new Promise ((resolve,reject)=>{
    resolve('success')
    reject('failure')
})
promise.catch((value)=>{
    console.log(value);
})