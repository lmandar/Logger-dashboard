module.exports = decriptResponse

async function decriptResponse(req, res, next) {
    try {
        console.log(req.outputData.name)
        req.outputData.message = 'Success'
        req.outputData.status_code = 1
        res.status(200).json({'data': req.outputData})
    } catch (err) {
        console.log(err)
        next(err)
    }
}