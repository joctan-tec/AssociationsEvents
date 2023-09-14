const express = require('express')
const controller = require('./Database/controller');
const router = express.Router()
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express()
const port = 8080
/*
Configurations for JSON
*/ 
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
/*
Call functions
*/
app.post('/login', controller.login)
app.post('/registerStudent', controller.registerStudent)
app.post('/registerAsociation', controller.registerAsociation)
app.post('/showEventsbyDate', controller.showEventsbyDate)
app.post('/showReminders', controller.showReminders)
app.post('/ShowEventsPerAsociation', controller.ShowEventsPerAsociation)
app.post('/ShowPropusalPerAsociation', controller.ShowPropusalPerAssociation)
app.post('/InsertPropusal', controller.InsertPropusal)

app.use('/',router)
/*
Shut up server
*/
app.listen(port, () => {
    console.log("Online")
})