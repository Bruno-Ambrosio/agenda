const express = require('express')
const app = express();
const Sequelize = require('sequelize')
const db = require('./db.js')

iniciar()
console.log(db)
db.conectarDB()


const rotaHome = require('./Home/home.js')
app.use(rotaHome)

const rotaCadastro = require('./Cadastro/cadastro.js')
app.use(rotaCadastro)

const rotaContatos = require('./Contatos/contatos.js')
app.use(rotaContatos)

const rotaEditar = require('./Editar/editar.js')
app.use(rotaEditar)

const rotaExcluir = require('./Excluir/excluir.js');

app.use(rotaExcluir)

function iniciar() {
    app.listen(3333, () => { console.log("O servidor abriu!") });
}

