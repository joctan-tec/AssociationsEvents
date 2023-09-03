const conn = require('../Database/connection')
/*
Calling SP Login
*/
const login = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inUser', req.body.inUser)
        .input('inPassword', req.body.inPassword)
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
};

/*
Calling SP SignUp
*/
const register = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inName', req.body.inName)
        .input('inLastName', req.body.inLastName)
        .input('inEmail', req.body.inEmail)
        .input('inLicence', req.body.inLicence)
        .input('inPassword', req.body.inPassword)
        .input('inUserType', req.body.inUserType)
        .input('inPhone', req.boby.inPhone)
        .input('inCareer', req.boby.inCareer)
        .input('inID', req.boby.inID)
        .output('outResultCode', 0)
        .execute('SignUpDB');
    if (result.output.outResultCode == 50001) {
        res.json({
            access: "Registro fallido",
            message: "El usuario ya está registrado"
        })
    } else if (result.output.outResultCode == 0){
        res.json({
            access: "Registro exitoso",
            message: "Se registró con éxito"
        })
    } else {
        res.json({
            access: "Registro fallido",
            message: "Verifique que los datos"
        })
    }
};
exports.login = login;
exports.register = register;

