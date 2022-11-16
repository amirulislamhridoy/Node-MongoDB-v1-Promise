// how to handle error

try{
    undefined.find()

}catch(err){
    const error = new Error('something is wrong')
    // throw error
    console.log(error.message)
    errorHandle(err)
}

export function errorHandle(error){
    const {name, message, code, state} = error
    // logger.error({
    //     name,message, code, state
    // })
    console.log('name', name,'message',message,'code',code,'state',state)
}

// export const d ='d'
const e = 'e'
const ee = 'ee'
export default e
// export {e, ee}