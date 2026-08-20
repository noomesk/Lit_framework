//Para pruebas de Configuración desde atributo HTML a js:
import './components/weather-dashboard.js';

document.querySelector('#app').innerHTML = `
  <weather-dashboard ciudad="Medellín"></weather-dashboard>
`;

//edito la ciudad desde el HTML. ciudad = Medellín
//si quiero Bogotá por default solo dejo: <weather-dashboard></weather-dashboard>