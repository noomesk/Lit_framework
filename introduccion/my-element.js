import { LitElement, html, css } from 'lit';

class SaludoSimple extends LitElement {
  // Definimos los estilos del componente
  static styles = css`
    p { 
      color: #007bff; 
      font-size: 1.2rem;
      border: 1px solid #ccc; 
      padding: 10px;
      border-radius: 8px;
    }
  `;

  // Definimos las propiedades (datos)
  static properties = {
    nombre: { type: String }
  };

  constructor() {
    super();
    this.nombre = 'Mundo';
  }

  // El método render define qué HTML mostrar
  render() {
    return html`<p>¡Hola, ${this.nombre}!</p>`;
  }
}

// Registramos la etiqueta <saludo-simple> en el navegador
customElements.define('saludo-simple', SaludoSimple);