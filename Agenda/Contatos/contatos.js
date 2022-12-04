const express = require('express')
const router = express.Router()

router.get('/contatos', (req, res) => {

    res.sendFile(__dirname + '/listar.html')

})

module.exports = router