const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;

 //lugar.getLugarLatLng(argv.direccion)
 //    .then(console.log)

//clima.getclima(-17.379999, -66.169998).then( console.log).catch(console.log);

const getInfo = async (direccion) => {

    try {
        let dataLugar = await lugar.getLugarLatLng(direccion);

        let temp = await clima.getclima(dataLugar.lat, dataLugar.lng);
        
        return `El clima de "${dataLugar.direccion}" es de ${temp}.`
    } catch (error) {
        return `No se pudo determinar el clima de "${direccion}"`
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);
