/* ROUTER 1.Bygg en enkel express-server. Skapa routes för tre olika sidor som du serverar med sendFile. En av sidorna ska vara en 404 och skicka både status och fil.
2. Utöka servern i uppgift 1 genom att flytta ut hela route-avsnittet till en egen fil och anropa (require) den från app.js
3. Fortsätt utöka genom att lägga till en kedja av metoder i routern för en av sidorna. Kedjan ska innehålla get, post och put.
*/


var express = require('express');
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var routy = require('./routes.js');
var bodyParser = require("body-parser");

/*app.use('/', routy);*/


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index2', function(req, res) {
    res.sendFile(__dirname + 'index2.html');
});

app.get('/index3', function(req, res) {
    res.sendFile(__dirname + '/https://klaral.github.io/login/index3.html');
});

/*app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index3.html');
});*/

/*app.get('*', (req, res) => {
    res.status(404).render('404', {
        title: '404 - not found'
    });
})*/

/*app.route('/user')
  .get(function (req, res) {
    res.send('Get userinfo')
  })
  .post(function (req, res) {
    res.send('add a user')
  })
  .put(function (req, res) {
    res.send('Update user')
  })*/



app.listen(3000, () => {
	console.log("Nu lyssnar vi på 3000.");
});















