//primero las importaciones:
import { LitElement, html, css } from 'lit';
/**
 * LitElement → clase base genérica de un componente Lit.
 * html       → herramienta para describir la plantilla visual.
 * css        → herramienta para escribir estilos del componente.
 */
//ahora si render: 
render() {
  const inicial = this.nombre
    ? this.nombre.charAt(0).toUpperCase() // toUpperCase(): convertir a mayusculas xd
    : '?';

  return html`
    <div class="card">
      <div class="avatar">${inicial}</div>
      <h2>${this.nombre}</h2>
      <p>${this.cargo}</p>
    </div>
  `;
}

/**
 * 1. Obtén la primera letra del nombre.
2. Hazla mayúscula.
3. Si no existe nombre, usa "?".
4. Devuelve una tarjeta que muestre:
   - la inicial,
   - el nombre,
   - el cargo.

nombre: "Angie"
cargo: "Software developer"

resultado:}
┌─────────────────────────┐
│            A            │
│          Angie          │
│   SOFTWARE DEVELOPER    │
└─────────────────────────┘
 */

/**
 * Completa un render() que muestre una tarjeta conceptual así:

text


┌─────────────────────┐
│ Hola, Angie         │
│ Que tengas un buen  │
│ día de estudio.     │
└─────────────────────┘
 suponiendo que tengo una clase conceptual llamada 
 MensajeBienvenida, que ya posee este dato:
 this.nombre = 'Angie'; 
 hacer un render. 
 */
//dificil:
render() {
  return html`
    <div class="card">
      <div class="saludo">Hola, ${this.nombre}</div>
      <h2>Que tengas un buen</h2>
      <p>día de estudio.</p>
    </div>
  `;
}

/**
 * Texto fijo:
<h2>Que tengas un buen</h2>

Dato dinámico de JavaScript:
<div>Hola, ${this.nombre}</div>
 */

/**
 * Transforma el componente en uno de presentación profesional para Angie.

Objetivo visual
Debe poder usarse así:

html


<perfil-profesional
  nombre="Angie"
  cargo="Software developer">
</perfil-profesional>
 */

//Herencia con extends:
class PerfilProfesional extends LitElement {
  // El resto de la clase continúa igual

  render() {
    return html`
      <div class="card">
        <h1>Perfil profesional:</h1>
        <h2>${this.nombre}</h2>
        <p>${this.cargo}</p>
      </div>
    `;
  }
}

// Registro con customElements.define(...)
customElements.define('perfil-profesional', PerfilProfesional);
/**"tarjeta-perfil" ─────► TarjetaPerfil
    etiqueta HTML             clase */