const express = require('express')
const router = express.Router()
const readFileService = require('./readfile.service')

router.get('/search-logs', searchLog)



function searchLog(req, res, next) {
    readFileService.searchLog(req)
        .then(output => {
            res.status(200).json(output)
        })
        .catch((err) => {
            res.status(500).json({ err })
        })
}

module.exports = router