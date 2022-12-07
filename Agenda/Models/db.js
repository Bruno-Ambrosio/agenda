const Sequelize = require('sequelize')
const connection = new Sequelize('equipe7', 'root', 'root', {

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



module.exports = {
    conectarDB,
    Sequelize: Sequelize,
    connection: connection
}
