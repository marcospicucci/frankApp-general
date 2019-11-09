
const express = require('express');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//const apiRouter = require('./app/services');
const app = express();

//var PythonShell = require('python-shell');
let {PythonShell} = require('python-shell');


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res
        .status(200)
        .sendFile(__dirname + '/public/index.html');
});

 app.get('/send', function (req, res) {

     res
         .status(200)
         .sendFile(__dirname + '/public/index.html');

    var options = {
        mode : 'text', //podria ser json
        pythonPath: '/usr/bin/python2.7',
        pythonOptions: ['-u'],
        args: []
    };

    console.log("Entro a send");
    var pyshell = new PythonShell(__dirname + '/public/prueba.py', options);
    // console.log("paso la creación de pyshell");

    pyshell.on('message', function (message) {
        //recibo msj enviado desd el script de python (un print por ej)
        console.log(message);
    });

    //finalizar el flujo de entrada y finaliza el proceso
    //pyshell.end(function (err) {
     //   console.log('entro a end');
      //  if (err){
       //     throw err;
        //};
        //console.log('terminado');
    //});
     console.log('1');
     console.log('2');
     console.log('3');
     console.log('4');
     console.log('5');
     pyshell.send('666');
});

app.post('/send', function (req, res) {

   res.writeHead(200, {"Content-Type": "text/plain"});
   res.end("mando la respuesta");

});

app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000');
});