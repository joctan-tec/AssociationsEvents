const conn = require('../Database/connection')
/*
Calling SP Login
*/
const login = async(req, res) => 
{
    const patron = /^[a-zA-Z0-9._%+-]+@estudiantec\.cr$/;
    const account = {}

    const pool = await conn.getConnection();
    var result = await pool.request()
        .input('inName', req.body.inName)
        .input('inPassword', req.body.inPassword)
        .output('outCedula')
        .output('outLoginSuccess', 0)             
        .output('outResultCode', 0)
        if(patron.test(req.body.inName)){
            result = await pool.request()
            .input('inName', req.body.inName)
            .input('inPassword', req.body.inPassword)
            .output('outCedula')
            .output('outLoginSuccess', 0)             
            .output('outResultCode', 0)
            .execute('LoginDB')
            account.accountType = "Student"
            account.id = result.output.outCedula
        }else{
            result = await pool.request()
            .input('inName', req.body.inName)
            .input('inPassword', req.body.inPassword)
            .output('outLoginSuccess', 0)             
            .output('outResultCode', 0)
            .execute('LoginDBAso');
            account.accountType = "Association"
            account.name = req.body.inName
        }
    if (result.output.outResultCode == 0 && result.output.outLoginSuccess == 0) {
        account.access = "Login Exitoso"
        account.message = "Inicio de sesión exitoso"
            res.json(account)
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

/*
Calling SP EventsbyDate
*/
const showEventsbyDate = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inDate', req.body.inDate)
        .output('outResultCode', 0)
        .execute('ShowEvents');
        res.json(result.recordset)
};
/* 
Calling SP Reminders
*/
const showReminders = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inId', req.body.inId)
        .output('outResultCode', 0)
        .execute('ShowReminders');
        res.json(result.recordset)
};
/* 
Calling SP ShowEventsPerAsociation
*/
const ShowEventsPerAsociation = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inName', req.body.inName)
        .output('outResultCode', 0)
        .execute('ShowEventsAssociation');
        res.json(result.recordset)
};
/* 
Calling SP ShowPropusalPerAsociation
*/
const ShowPropusalPerAssociation = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inName', req.body.inName)
        .output('outResultCode', 0)
        .execute('ShowProposals');
        res.json(result.recordset)
};

/* 
Calling SP ShowEventsPerAsociation
*/
const InsertPropusal = async(req, res) => 
{
    const pool = await conn.getConnection();
    const result = await pool.request()
        .input('inAssociation', req.body.inAssociation)
        .input('inThematic', req.body.inThematic)
        .input('inId', req.body.inId)
        .input('inObjetives', req.body.inObjetives)
        .input('inActivityIdeas', req.body.inActivityIdeas)
        .input('inCategory', req.body.inCategory)
        .output('outResultCode', 0)
        .execute('InserPropusalEvent');
        res.json(result.recordset)
};

exports.login = login;
exports.registerStudent = registerStudent;
exports.registerAsociation = registerAsociation;
exports.showEventsbyDate = showEventsbyDate;
exports.showReminders = showReminders;
exports.ShowEventsPerAsociation = ShowEventsPerAsociation;
exports.ShowPropusalPerAssociation = ShowPropusalPerAssociation;
exports.InsertPropusal = InsertPropusal;
