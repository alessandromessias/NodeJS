// primeiro app(middleware) com node-express
// a variavel vai receber - como valor - o módulo express
var express = require('express');
//criando o objeto para fazer uso de suas propriedades
var app = express();

//usando o middleware, vamos acessar um recurso do projeto Express- Node

add.use(express.static('public'));

//implementando o "listener" (escutador de requisição)
var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log('O servidor pode ser acessado em http://%s:%s', host,port)
});


/*
//fazendo a nossa primeira requisição - via meétodo get()
app.get('/', function(req, res){
    res.send('Hello Mundo NodeJS! Este é o componente-padrão!')
});

//segundo componente - indicado com um novo endereço
app.get('/uma_lista', function(req, res){
    res.send('Segundo componente. Pode ter qualquer conteúdo')
});

//terceiro componente - indicado com, também, um novo endereço
app.get('/zf*zy', function(req, res){
    res.send('Terceiro componente. Um conteúdo bacana!!')
});
*/