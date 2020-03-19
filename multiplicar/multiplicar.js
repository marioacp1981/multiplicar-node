//require
const fs = require('fs');
//const fs = require('express');//paquete q se instala no nativo de node
//const fs = require('./xxxxx');//los que cteamos

let crearArchivoFunction = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Dato no mumerico ${ base } `)
            return;
        }

        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${ base } * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);

        });
    });
}

let listarTablaFunction = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Dato no mumerico ${ base } `)
            return;
        }

        let data = '';
        console.log(limite);
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);

        });
    });
}


module.exports = {
    crearArchivoFunction,
    listarTablaFunction
}