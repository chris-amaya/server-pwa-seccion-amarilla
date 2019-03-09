"use strict"

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*=============================================
CARGAR AQUI RUTASj
=============================================*/
const rutaEnterprises = require('./rutas/enterprises.rutes');

/*=============================================
CABECERAS HTTP
=============================================*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Allow", "GET, POST, PUT, DELETE");
  next();
});

app.use('/api', rutaEnterprises)


module.exports = app;