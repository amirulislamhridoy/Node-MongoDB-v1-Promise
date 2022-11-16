// promise/async kaj handle in loop

const myPromise = new Promise((resolve, rejected) => {
    const user = {work: 'employee'};
    if(user){
        resolve({name: "Jhon"})
    }else{
        rejected('something wrong')
    }
})
// myPromise.then(res => console.log(res)).catch(error => console.log(error))

const userId = [1, 2,3,4,5]
let userData = []
for(let i=0; i<userId.length; i++){
    // myPromise.then(res => {
    //     userData.push(res)
    // },5000)
    userData.push(myPromise)
}
Promise.all(userData).then(res => console.log(res))

// console.log('data', userData)