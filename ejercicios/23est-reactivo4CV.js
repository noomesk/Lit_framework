//Climavivo: ciudades y tipos de datos / Est. reactivo 
import { LitElement, html } from 'lit';

class WeatherDashboard extends LitElement {
  static properties = {
    ciudad: { type: String },
    unidades: { type: String }, //celsius o Fahrenheit 

     _cargando: { state: true }, //estado react interno
     _error: { state: true }, // ← coma
     _pronostico: { state: true } // ← no hace falta coma si es la última
  };

  //valores iniciales
constructor() {
  super();

  this.ciudad = 'Bogotá';
  this._cargando = false;
  this._error = null;
}
  }

  render() {
    return html`
      <section>
        <h1>ClimaVivo</h1>
        <p>Busca una ciudad para consultar su pronóstico.</p>
        <p>Ciudad actual: ${this.ciudad}</p>
      </section>
    `;
  }
}

customElements.define('weather-dashboard', WeatherDashboard);