const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivoFunction, listarTablaFunction } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTablaFunction(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${ archivo }`.red))
            .catch(err => console.log(err))
        break;

    case 'crear':
        crearArchivoFunction(argv.base)
            .then(archivo => console.log(`Archivo Creado ${ archivo }`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('No reonocido');


}




//console.log(process.argv);

//let argv2 = process.argv;
//console.log(argv.base);

//console.log('Limite', argv.limite);
/*let paramero = argv[2];
let base = paramero.split('=')[1]
    //console.log(base);
crearArchivoFunction(base)
    .then(archivo => console.log(`Archivo Creado ${ archivo }`))
    .catch(err => console.log(err))*/