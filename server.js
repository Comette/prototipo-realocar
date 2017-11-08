var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic('./public'));

/*
req = requisição
res = resposta
next = not important
*/
app.get('/api/teste', (req, res, next) => {
  res.status(200).json({name: 'batata'})
})

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);