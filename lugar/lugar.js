const axios = require("axios");

const getLugarLatLng = async (direccion) => {
  const encodedUrl = encodeURI(direccion);

  const instanceAxios = axios.create({
    baseURL: `http://api.positionstack.com/v1/forward?access_key=9943b8003cb940cb095a2a41341e1e04&query=${encodedUrl}`,
  });

  const respuesta = await instanceAxios.get();

  if (respuesta.data.data.length === 0) {
    throw new Error(`No hay resultados para "${direccion}"`);
  }

  const data = respuesta.data.data[0];
  const { name, latitude, longitude } = data;

  return { direccion: name, lat: latitude, lng: longitude };
};

module.exports = {
  getLugarLatLng,
};
