const express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    console.log('Request Url: '+req.url);
    next();
})

app.get('/', function(req,res){
    res.render('index');
});

/*app.get('/', function(req,res){
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello</h1></body></html>');
    //res.send('<head><link rel="stylesheet" href="/assets/style.css"></head><h1>Hola mundo desde EXPRESS.JS</h1>');
});*/

app.get('/person/:id', function(req,res){
    //res.send('<html><head></head><body><h1>Person: '+req.params.id+' </h1></body></html>');
    res.render('person', {ID: req.params.id});
});

app.get('/api', function(req,res){
    res.json({firstname: 'John', lastname:'Doe'});
});

app.listen(port);
