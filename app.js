const express = require('express');
var hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


//Servir contenido estático
app.use( express.static('public') );

// app.get('/', function (req, res) {
//   res.send('Home page')
// });
app.get('/', function (req, res) {
  res.render('home',{
    nombre : 'Fanny',
    titulo : 'Curso de Node'
  });
});

app.get('/generic', function (req, res) {
  res.render('genericnp',{
    nombre : 'Fanny',
    titulo : 'Curso de Node'
  });
});

app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre : 'Fanny',
    titulo : 'Curso de Node'
  });
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
  });
  

  app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
  });

// app.get('/generic', function (req, res) {
//     res.sendFile( __dirname + '/public/generic.html');
//   });

//   app.get('/elements', function (req, res) {
//     res.sendFile( __dirname + '/public/elements.html');
//   });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


// app.listen(8080)