"use strict"
const connection = require('../connection.js');
function enterprise(req, res){
    const parametros = req.params;
    // const usuario = parametros.usuario;
    // const password = parametros.password;
    res.status(200).send({
        "enterprise": {
          "name_enterprise": "SIEConnect",
          "desc_enterprise": "Lorem Ipsum",
          "photos": ["img/background.jpg", "img/background.jpg"]
        }
      });
      console.log("Something");
}

module.exports = {
	enterprise
}