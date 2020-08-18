const mysql = require('mysql')

const conn = function(){

    return connection = mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_cavi_principal'
    })
}

module.exports = function () {
    return conn
}