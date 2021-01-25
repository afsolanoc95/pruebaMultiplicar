const argv=require(`./config/yargs`).argv;
//const multiplicar = require(`./multiplicador/multiplicar`)
const {crearArchivo,listarArchivo} = require(`./multiplicador/multiplicar`);

//let base=`a`;     node app crear --base 7

let comando=argv._[0];
switch(comando){
    case `listar`:
        listarArchivo(argv.base,argv.limite).then(tabla=>console.log(`${tabla}`))
        break;
    case `crear`:
        crearArchivo(argv.base,argv.limite).then(archivo=>console.log(`archivo creado: ${archivo}`))
        .catch(e=>console.log(e));
        break;
    default:
        console.log(`comando no reconocido`);
}

//let argv2=process.argv;
//let parametro = argv[2];
//let base=parametro.split(`=`)[1];



//multiplicar.crearArchivo(base).then(archivo=>console.log(`archivo creado: ${archivo}`));

