const express = require('express')
const router = express.Router()
const service = require('./login-signup.service')
const postMiddleWare = require('./../../middleware/postMiddleware')

router.post('/login', login, postMiddleWare)
router.post('/sign-up', signUp, postMiddleWare)



function login(req, res, next) {
    service.login(req)
        .then(output => {
            req.outputData = output
            // res.status(200).json(output)
            next()
        })
        .catch((err) => {
            console.log("err-->>",err)
            res.status(500).json({ err })
        })
}

function signUp(req, res, next) {
    service.signUp(req)
        .then(output => {
            req.outputData = output
            next()
        })
        .catch((err) => {
            console.log("err-->>",err)
            res.status(500).json({ err })
        })
}

module.exports = router