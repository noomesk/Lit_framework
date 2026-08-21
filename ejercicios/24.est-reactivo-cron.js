//EJERCICIO FINAL: CRONÓMETRO

import { LitElement, html, css } from 'lit';

class MiCronometro extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .timer-container { 
      background: #0f172a;
      
      
      border: 1px solid #334155;
      
      border-radius: 8px;
      padding: 40px 60px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      min-width: 300px;
    }
    
    .screen {
      font-family: 'Courier New', monospace;
      font-size: 5rem; 
      font-weight: bold; 
      color: #00ffcc;
      
      background: rgba(0,0,0,0.4);
      padding: 20px 40px;
      border-radius: 8px;
      border: 2px solid rgba(0, 255, 204, 0.2);
      letter-spacing: 5px;
      width: 100%;
      box-sizing: border-box;
    }
    
    .screen.paused {
      color: #ff3366;
      
      border-color: rgba(255, 51, 102, 0.2);
    }
    
    .controls {
      display: flex;
      gap: 20px;
      width: 100%;
    }
    
    button {
      flex: 1;
      padding: 15px 0;
      font-size: 1.2rem;
      font-weight: 600;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .btn-start {
      background: #00ffcc;
      color: #004d39;
      
    }
    
    .btn-stop {
      background: #ff3366;
      color: white;
      
    }
    
    .btn-reset {
      background: #334155;
      color: white;
      
    }
    
    button:hover {
      transform: translateY(-5px);
    }
    
    button:active {
      transform: translateY(2px);
    }
  `;

  static properties = {
    //AMBOS SON ESTADOS REACTIVOS INTERNOS XQ LOS CONTROLA EL COMPONENTE:
    _segundos: { state: true }, // cambia internamente cada segundo
    _corriendo: { state: true } // cambia cuando el componente inicia, pausa o reinicia
  };

  constructor() {
    super();
    this._segundos = 0;  //this._segundos++; esta es la actualización reactiva 
    this._corriendo = false;
    this._intervalo = null;
  }

  // Formato MM:SS
  get formatoTiempo() {
    const min = Math.floor(this._segundos / 60).toString().padStart(2, '0');
    const sec = (this._segundos % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }

  render() {
    return html`
      <div class="timer-container">
        <div class="screen ${!this._corriendo && this._segundos > 0 ? 'paused' : ''}">
          ${this.formatoTiempo}
        </div>
        
        <div class="controls">
          <button 
            class="${this._corriendo ? 'btn-stop' : 'btn-start'}"
            @click="${this._toggle}">
            ${this._corriendo ? 'PAUSA' : 'INICIO'}
          </button>
          
          <button class="btn-reset" @click="${this._reset}">
            RESET
          </button>
        </div>
      </div>
    `;
  }

  _toggle() {
    if (this._corriendo) {
      this._detener();
    } else {
      this._iniciar();
    }
  }

  _iniciar() {
    this._corriendo = true;
    this._intervalo = setInterval(() => {
      this._segundos++; 
    }, 1000);
  }

  _detener() {
    this._corriendo = false;
    clearInterval(this._intervalo);
  }
  
  _reset() {
    this._detener();
    this._segundos = 0;
  }
}

customElements.define('mi-cronometro', MiCronometro);

/**
 * setInterval()
    ↓ cada 1000 ms
this._segundos++
    ↓
Lit detecta que _segundos cambió
    ↓
render() se actualiza
    ↓
${this.formatoTiempo} muestra el nuevo tiempo
 */

/**
 * Cuando hago clic en INICIO:
 * _toggle()
   ↓
_iniciar()
   ↓
this._corriendo = true
this._intervalo = setInterval(...)
   ↓
cada segundo:
this._segundos++
   ↓
Lit actualiza la pantalla

Cuando hago clic en PAUSA:
_toggle()
   ↓
_detener()
   ↓
this._corriendo = false
clearInterval(this._intervalo)
   ↓
Lit actualiza:
- botón: INICIO
- color de pantalla: paused
 */