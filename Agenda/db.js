const Sequelize = require('sequelize')
const connection = new Sequelize('equipe7', 'root', '1048596', {

    host: 'localhost',
    dialect: 'mysql'

})

conectarDB = () => {

    connection.authenticate()
        .then(() => {
            console.log('Conexão com o banco estabelecida')
        }).catch(() => {
            console.log('Erro ao se conectar')
        })

}

inserirContatos = (nome, telefone) => {

    let Contatos = connection.define('Contatos', {
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING
    }, {
        timestamps: false
    })

    connection.sync()
        .then(() => {
            Contatos.create({
                nome: nome,
                telefone: telefone
            })
        })


}
var removerContatos = (id) => {

    let Contatos = connection.define('Contatos', {
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING
    }, {
        timestamps: false
    })

    connection.sync()
        .then(() => {
            Contatos.destroy({
                where: { 'id': id }
            })
        })
}

var alterarContatos = (id, nome, telefone) => {

    let Contatos = connection.define('Contatos', {
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING
    }, {
        timestamps: false
    })

    connection.sync()
        .then(() => {
            Contatos.update({
                nome: nome,
                telefone: telefone
            }, { where: { 'id': id } })
        })
}

var ordenarContatos = () => {
    let Contatos = connection.define('Contatos', {
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING
    }, {
        timestamps: false
    })

    connection.sync()
        .then(() => {
            Contatos.findAll({
                order: [
                    ['nome', 'ASC']
                ]
            })
        })
}

var findContatos = (id) => {
    let Contatos = connection.define('Contatos', {
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING
    }, {
        timestamps: false
    })

    connection.sync()
    .then(() => {
        Contatos.findAll({
            where: {'id' : id}
        })
    })
}

module.exports = {
    conectarDB,
    inserirContatos,
    removerContatos,
    alterarContatos,
    ordenarContatos,
    findContatos
}