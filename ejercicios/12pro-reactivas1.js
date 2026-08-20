//propiedad de texto 
class SaludoUsuario extends LitElement {
  static properties = {
    nombre: { type: String }
  };

  constructor() {
    super();
    this.nombre = 'Visitante';
  }

  render() {
    return html`<p>Hola, ${this.nombre}</p>`;
  }
}