//
const asyncHandler = (requestHandler) => { //receives a function as input
    return (req, res, next) => { //returns a new function that takes req, res, next
        Promise.resolve(requestHandler(req, res, next)) //calls the original function and wraps it in a Promise
        //promise means it can handle async operations
        //main two things: resolve (successful) and reject (error) we can write catch for errors
        //in simple we resolve me hmne function pass kiya hai and uske andar req, res, next pass kiya hai
        //catch me hmne error ko next() m pass kiya hai .catch and reject dono same hai
        .catch((err) => next(err)) //catches any errors and passes them to next()
        
    }
}


export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }