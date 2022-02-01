const { rejects } = require('assert');
const fs = require('fs');
let colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta) => {

  try {
    
    let salida = ' ';

   for (i = 1; i <=hasta; i++) {

  salida += `${base} x ${i} = ${base*i}\n`;

  }

    if (listar) {

      console.log('================')
      console.log(`tabla del ${base}`)
      console.log('================')

      console.log(salida.magenta);
    }

  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

  return (`tabla-${base}.txt `);

  } catch (err) {
    throw err;  
  }

}

module.exports = {
  crearArchivo
}