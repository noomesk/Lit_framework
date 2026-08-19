//estructura mínima: 
render() {
  return html`<p>Hola, ${this.nombre}</p>`;
}

/**
 * render()
→ “Voy a definir la interfaz.”

return
→ “Entrego esa interfaz a Lit.”

html`...`
→ “Esta es una plantilla HTML de Lit.”

${this.nombre}
→ “Inserta aquí el valor actual de nombre.”
 */

const nombre = 'Angie';
const mensaje = `Hola, ${nombre}`;

//Hola, Angie