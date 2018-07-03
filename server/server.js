const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', ( req, res ) => {
	res.json('get Usuario');
});

app.post('/usuario', ( req, res ) => {
	
	if(!req.body) return res.sendStatus(400);
	let nombre = req.body.nombre;
	let edad = req.body.edad;
	res.json({nombre,edad});
});

app.put('/usuario/:id', (req, res) => {

	let id = req.params.id;

	res.json({id});
});

app.delete('/usuario/:id', (req, res) => {
	
	let id = req.params.id;
	
	res.json({id});
});

app.listen( port, ()=>{
	console.log(`Puerto ${ port }`);
});