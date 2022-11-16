// how to use async, await use 

const myPromise2 = new Promise((resolve, reject) => {
    const user = {name: 'name'}
    resolve('success')
})

const testFn = async () =>{
    const res = await myPromise2
    // await myPromise.then(res => console.log(res))
    console.log(res)
}
testFn()

// const a = 'a'
// module.exports.b = b = 'b'
// module.exports = {myPromise2, a}
// module.exports = testFn