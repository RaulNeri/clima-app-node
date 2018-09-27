const axios = require('axios');

//Ejercicio 11. Clima con promesa y url de temperatura
const getClima = async(lat, lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=5502aaea8a7511dc6a7ee20b62a86587`);

    //let location = respuesta.data.results[4];
    //let coors = location.temp;

    return respuesta.data.main.temp;
}


module.exports = {
    getClima
}