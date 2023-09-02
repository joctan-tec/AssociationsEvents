const conn = require('../Database/connection')
/*
Function to call SP FilterByAmount
*//*
const login = async(req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inUser', req.body.inUser)
        .input('inPassword', req.body.inPassword)
        .input('inPostUser', req.body.inPostUser)
        .input('inPostIp', req.body.inPostIp)
        .output('outLoginSuccess', 0)             
        .output('outResultCode', 0)
        .execute('LoginDB');
        if (result.output.outResultCode == 0 && result.output.outLoginSuccess == 0){
            res.json({
                access: "Login Exitoso",
                message: "Inicio de sesión exitoso"
            })
        } else {
            res.json({
                access: "Login Fallido",
                message: "Usuario o contraseña incorrectos"
            })
        }
};*/

//exports.login = login;

