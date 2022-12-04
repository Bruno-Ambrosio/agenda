const express = require('express')
const router = express.Router()

router.get('/editar', (req, res) => {

    res.sendFile(__dirname + '/editar.html')

})

module.exports = router;