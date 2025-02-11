export const errorHandler = (statusCode,message)=>{
    //creating the error here 
    const error = new Error();
    error.statusCode= statusCode;
    error.message= message ;
    return error;
};
