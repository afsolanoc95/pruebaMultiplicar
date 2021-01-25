const fs = require('fs');


let listarArchivo=(base,limite) =>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`no es un numero`);
            return;
        }
        let data=``;
        for(let i=0; i<=limite; i++){
            data +=`${base} * ${i} = ${base*i} \n`;
        }
        resolve(data);
    }
    )
}

let crearArchivo= (base,limite)=>{
    return new Promise((resolve,reject)=>{

    if(!Number(base)){
        reject(`no es un numero`);
        return;
    }

    let data=``;
    for(let i=0; i<=limite; i++){
        data +=`${base} * ${i} = ${base*i} \n`;
    }

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) reject(err)
        else
            resolve(`tabla-${base}.txt`)
    });
    }
    )
}

module.exports = {
    crearArchivo,
    listarArchivo
}



