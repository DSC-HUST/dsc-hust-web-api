export const errorHandler = (error, req, res, next) => {
    if(error) res.json({
        error: error.message
    });
}