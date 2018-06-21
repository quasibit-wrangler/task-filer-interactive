

//configure enviroment variables
require("dotenv").config();

const bodyParser = require('body-parser'); // decodes bytstream in to js object
const express = require('express');
const port = process.env.PORT;

var app = express();

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   next();
 });
app.use(bodyParser.json()); // soime stuff to convert int o json
app.use(bodyParser.urlencoded({ extended: true }));

// we serve all the static files by sending them as text to the broweser th
// that interprets it as code, not saving it
staticOpts = {
   extensions: ['php','htm','html','css','js'],
   index: 'index.html',
   setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
    switch(path.split('.')[1]){
  		case "css":
  		   res.set('Content-Type', 'text/css');
  		   break;
  		case "js":
  		   res.set('Content-Type', 'text/javascript');
  		   break;
  		case "html":
  		   res.set('Content-Type', 'text/html');
  		   break;
  		default:
  		   res.set('Content-Type', 'text/plain');
  		   break;
  	  }
   }
}

app.use('/home', express.static(process.cwd() + '/public', staticOpts));


app.get('*',function(req,res,next){
  res.status(404).send();
})




app.listen(port,function(err){
  console.log("\n=== Listenign on port ", port);
});
