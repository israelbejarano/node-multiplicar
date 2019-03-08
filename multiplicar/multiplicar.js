// requires
const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido -> ${base} <- No es un numero!`.red);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err.red)
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`.green);
            }
        });
    });
}

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}

module.exports = { crearArchivo, listarTabla };