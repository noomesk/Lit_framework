// Intermedio — panel con configuración externa y estado propio

class FichaPersona extends LitElement {
  static properties = {
    nombre: { type: String },
    _abierto: { state: true }
  };

  constructor() {
    super();
    this.nombre = 'Invitado';
    this._abierto = false;
  }

  render() {
    return html`
      <h2>${this.nombre}</h2>

      ${this._abierto
        ? html`<p>Información adicional visible.</p>`
        : html`<p>Panel cerrado.</p>`
      }
    `;
  }
}

/**
 nombre
→ viene desde fuera.

 _abierto
→ pertenece al componente
 */