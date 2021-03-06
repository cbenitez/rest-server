const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
	nombre: {
		type: String,
		required: [true, 'El nombre es requerido']
	},
	email: {
		type: String,
		required: [true,'El correo es necesario']
	},
	password: {
		type: String,
		required: [true, 'La clave es obligatoria']
	},
	img:{
		type: String,
		required: false
	},
	role:{
		default: 'USER_ROLE',
	},
	estado:{
		type: Boolean,
		default: true
	},
	google:{
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model( 'Usuario', usuarioSchema );