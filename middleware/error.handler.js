const  errorLogs = (err,req,res,next) => {

    console.log("error-logs");
    console.error(err)
    next(err);

}


const  handleError = (err, req, res, next) => {
    console.log("error-handle");
    res.status(501).json({
        message: err.message,
        stack: err.stack
    });
}



module.exports = {
    errorLogs,
    handleError
}