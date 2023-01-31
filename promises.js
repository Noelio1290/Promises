const getRandomInt = max => {
    return Math.floor(Math.random() * max);
  }

const oneCustomPromise = new Promise((resolve, reject)=>{
    const callbackForTimeOut = ()=>{
        resolve({thisIsAn: 'object'})
    }

    const timeToWait = getRandomInt(5) * 1000
    setTimeout(callbackForTimeOut, timeToWait)
})

console.log('soy una linea que se ejecuta primero')
oneCustomPromise.then(response => console.log(response))

const myAsyncFunc = async () => {
    console.log(await oneCustomPromise)
}
myAsyncFunc()

console.log('soy una linea que se ejecuta después')
console.log(oneCustomPromise)