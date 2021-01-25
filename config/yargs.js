const opts={
    base:{
        demand:true,
        alias:`b`
    },
    limite:{
        alias:`l`,
        default:10
    }
}
const argv=require(`yargs`)
.command('listar','imprima en consola tabla',opts)
.command('crear','genera archivo',opts)
.help()
.argv;

module.exports={
    argv
}