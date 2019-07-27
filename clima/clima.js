const axios = require('axios');

const getclima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=652d51d36abecff2c5a291d9ae2d8ba3&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getclima
}