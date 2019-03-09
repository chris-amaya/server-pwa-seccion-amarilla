"use strict"

var express = require("express");
var ControladorEnterprises = require("../controladores/enterprises.controlador.js");
var api = express.Router();

api.get("/enterprises/:enterprise", ControladorEnterprises.enterprise);



//Exportamos el módulo api
module.exports = api;