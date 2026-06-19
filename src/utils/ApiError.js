class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],      // yahan multiple errors rakh sakte ho (e.g. validation issues)
        stack = ""        // stack se pata chalega error kahan se aaya (line/function)
    ){
        super(message) 
        this.statusCode = statusCode   // HTTP status code (400, 404, 500...)
        this.data = null               // extra data ki jagah, abhi null
        this.message = message         // client ko dikhane wala message
        this.success = false;          // error hai to success hamesha false
        this.errors = errors           // detailed errors list

        if (stack) {
            this.stack = stack         // custom stack aaya to wahi set karo
        } else {
            Error.captureStackTrace(this, this.constructor) // warna auto capture karo
        }

    }
}

export {ApiError}