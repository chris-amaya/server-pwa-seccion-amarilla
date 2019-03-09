"use strict"

var mysql = require("mysql");
var app = require("./app");
var port = process.env.PORT || 5000;

/*=============================================
CONEXIÓN A BASE DE DATOS
=============================================*/
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'celeron',
   database: 'seccion_amarilla',
});

connection.connect((error, respuesta) => {
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
      app.listen(port, function(){
         console.log(`Server Running on http://localhost:${port}/`);
		})
   }
});
