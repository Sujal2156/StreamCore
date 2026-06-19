class ApiResponse { // to standardize API responses
    constructor(statusCode, data, message = "Success"){        // default message is "Success"
        this.statusCode = statusCode // HTTP status code
        this.data = data // payload data
        this.message = message //why we write this.message because sometimes we want to send custom message
        //this keyword means current instance of the class inshort it refers to the object being created like example
        // const response = new ApiResponse(200, {id: 1}, "Data fetched successfully")
        // here this.message will refer to "Data fetched successfully"
        //if we not write this.message then it will not be assigned to the object being created
        
        this.success = statusCode < 400
    }
}

export { ApiResponse }