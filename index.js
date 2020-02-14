const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

	router.get('/',function(req,res){
	  	res.sendFile(path.join(__dirname+'/public/html/index.html'));
 	 	//__dirname : verwijst naar project folder.
	});

	router.get('/about',function(req,res){
  		res.sendFile(path.join(__dirname+'/public/html/about.html'));
	});

	router.get('/contact',function(req,res){
  		res.sendFile(path.join(__dirname+'/public/html/contact.html'));
	});

	//pagina dat niet bestaat
	router.get('*',function(req,res){
 		res.sendFile(path.join(__dirname+'/public/html/404.html'));
	});


//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Server draait op poort 3000');
