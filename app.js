var app =require("./config/server")
const { query, validationResult } = require('express-validator');


app.listen(3000,function(){
    console.log("Servidor ON ")
})