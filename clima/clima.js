const axios = require("axios");

const getClima = async (lat, lng) => {
  const respuesta = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=59be08647f88f49d6e000211a51ac22a&units=metric`
  );

  return respuesta.data.main.temp;
};

module.exports = {
  getClima,
};
