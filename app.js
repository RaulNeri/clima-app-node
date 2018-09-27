const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temperatura }°C`;
    } catch (error) {
        return `No se pudo determinar el clima en "${ direccion }"`;
    }
}


getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(respuesta => {
//         console.log(respuesta);
//     })
//     .catch(e => console.log(e));

// //Ejercicio 11. Colocar la temperatura segun lat y lng
// clima.getClima(9.9280694, -84.0907246)
//     .then(temperatura => console.log(temperatura))
//     .catch(err => console.log(err));