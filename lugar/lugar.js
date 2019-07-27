const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': '4d640b34bfmshbdb1014a60d931ap107811jsn1263c15aeb71'}
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

