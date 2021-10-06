var express= require('express');
const http =require('http');
var app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//metodo http que vamos a recibir
//metodo get para traer datos
app.get('/saludo', function(req, res){
    res.send('hello world 3');
});
//metodo enviar datos
app.post('/enviar', function(req, res){
    const total=req.body.precioUnitario * req.body.cantidad
    res.status(200).json(total);

});
//asignar el puerto en el que va a trabajar el server
app.set("port", 3002)
//creamos el server
const server=http.createServer(app)
//poner en escucha el servidor en el puerto 3002
server.listen(3002)