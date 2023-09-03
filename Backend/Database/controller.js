const conn = require('../Database/connection')
/*
Calling SP Login
*/
const login = async(req, res) => 
{
    const patron = /^[a-zA-Z0-9._%+-]+@estudiantec\.cr$/;

    const pool = await conn.getConnection();
    var result = await pool.request()
        .input('inName', req.body.inName)
        .input('inPassword', req.body.inPassword)
        .output('outLoginSuccess', 0)             
        .output('outResultCode', 0)
        if(patron.test(req.body.inName)){
            result = await pool.request()
            .input('inName', req.body.inName)
            .input('inPassword', req.body.inPassword)
            .output('outLoginSuccess', 0)             
            .output('outResultCode', 0)
            .execute('LoginDB')
            console.log('Estudiante')
        }else{
            result = await pool.request()
            .input('inName', req.body.inName)
            .input('inPassword', req.body.inPassword)
            .output('outLoginSuccess', 0)             
            .output('outResultCode', 0)
            .execute('LoginDBAso');
            console.log('Asocia')
        }
        console.log(result.output.outLoginSuccess)
        console.log(result.output.outResultCode)
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
const registerStudent = async (req, res) => {
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inName', req.body.inName)
        .input('inLastName', req.body.inLastName)
        .input('inEmail', req.body.inEmail)
        .input('inLicence', req.body.inLicence)
        .input('inPassword', req.body.inPassword)
        .input('inUserType', req.body.inUserType)
        .input('inPhone', req.body.inPhone)
        .input('inCareer', req.body.inCareer)
        .input('inID', req.body.inID)
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

/*
Calling SP SignUpAsociations
*/
const registerAsociation = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
    .input('inName', req.body.inName)
    .input('inPassword', req.body.inPassword)
    .input('inCareer', req.body.inCareer)
    .output('outResultCode', 0)
    .execute('SignUpBDAso');
    if (result.output.outResultCode == 50001) {
        res.json({
            access: "Registro fallido",
            message: "La asociación ya éxiste"
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
exports.registerStudent = registerStudent;
exports.registerAsociation = registerAsociation;

