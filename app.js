const { option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
let colors = require('colors');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then (nombreArchivo => console.log(nombreArchivo.green, 'creado'.yellow))
.catch(err => console.log(err));