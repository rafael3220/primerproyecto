// controlador de la index router
//paso 1 requerimos las librerias
const connection = require('../config/db.js');
//paso 2 creo una variable que es un objeto la cual exporto para utilizarla en el archivo de  la ruta
const controller = {};

//paso 3 creamos un controlador con un nombre unico para el mismo metodo http que 
//utilize(este seria un listado de frutas)

controller.listFrutas = (req, res) => {
    // res.send('funciona el controlador de listfrutas')
    let listsql = 'SELECT * FROM fruta';
    connection.query(listsql, (error, resultsFrutas) => {
        console.log(resultsFrutas)
        res.send('select de frutas ok');
    });
}

//paso 6 creamos otro controlador para guardar frutas nuevas 
// volvemos al paso 5 para llamar al controlador
controller.guardarFruta = (req, res) => {
    let nombre_fruta = req.body.nombre_fruta;
    let color_fruta = req.body.color_fruta;
    let precio = req.body.precio;
    let calidad = req.body.calidad;

    let insertsql = 'INSERT INTO fruta set?';
    connection.query(insertsql, { nombre_fruta, color_fruta, precio, calidad },
        (error, resultsFrutas) => {
            console.log(resultsFrutas)
            res.send('insert ok');
        });
}

//paso 7 creamos otro controlador para eliminar fruta existentes 
// volvemos al paso 5 para llamar al controlador
controller.deleteFruta = (req, res) => {
    let id_fruta = req.params.id_fruta;


    let borrarsql = 'DELETE FROM fruta WHERE id_fruta =';
    connection.query(borrarsql + id_fruta,
        (error, resultsFruta) => {
            console.log(resultsFruta)
            res.send('fruta eliminada ok');
        });
}


//paso 8 creamos otro controlador para editar fruta existentes 
// volvemos al paso 5 para llamar al controlador
controller.editFruta = (req, res) => {
    let id_fruta = req.params.id_fruta;

    let editsql = `SELECT * FROM fruta WHERE id_fruta = '${id_fruta}'` ;
    connection.query(editsql, 
        (error, resultsedit) => {
            res.send(resultsedit);
        })
}


//paso 9 creamos otro controlador para updatear las frutas existentes 
// volvemos al paso 5 para llamar al controlador
controller.updateFruta = (req, res) => {
    let id_fruta = req.params.id_fruta;
    let nombre_fruta = req.body.nombre_fruta;
    let color_fruta = req.body.color_fruta;
    let precio = req.body.precio;
    let calidad = req.body.calidad;

    let updateSql = `UPDATE fruta set? WHERE id_fruta = '${id_fruta}'`;
    connection.query(updateSql, { nombre_fruta, color_fruta, precio, calidad }, (err, updateResult) => {
        res.send(updateResult);
    });
}


//ultimo paso exporto con la variable controller para utilizarla en las rutas
module.exports = controller;
