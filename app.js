const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

const { argv } = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true,
  },
});

const getInfo = async (direccion) => {
  try {
    const responseLugar = await getLugarLatLng(direccion);
    const responseClima = await getClima(responseLugar.lat, responseLugar.lng);

    return `El clima de ${direccion} es de ${responseClima}`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
