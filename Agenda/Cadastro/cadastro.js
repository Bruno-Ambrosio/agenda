const express = require('express')
const router = express.Router()

router.get('/cadastro', (req, res) => {

    res.sendFile(__dirname + '/cadastro.html')

})

module.exports = router