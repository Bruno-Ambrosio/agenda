const express = require('express')
const router = express.Router()

router.get('/excluir', (req, res) => {

    res.sendFile(__dirname + '/excluir.html')

})

module.exports = router