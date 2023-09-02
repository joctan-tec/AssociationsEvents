const sql = require('mssql')

var dbSettings = {      
    user: 'joctan',                    
    password: 'wAy3D@MM6*KfS$#SwPtSJ^W3&T#6ZV8mrFB$aMCwiF^3sPr#vQyNkCxhFrsx5PrS',
    server: 'associations-events-server.database.windows.net',
    database: 'AssociationsEventsDB',
    port:  1433,    
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

async function getConnection() {
    try {
    const pool = await sql.connect(dbSettings);
    console.dir(pool)
    return pool;
    } catch (error) {
        console.error(error);
    }
}
module.exports = {getConnection}