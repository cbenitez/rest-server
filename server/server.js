const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/usuario', ( req,res ) => {
	res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
	res.json('post Usuario');
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