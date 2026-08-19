//Condicionales en templates
// Una interfaz no siempre debe mostrar lo mismo, debe ser dinámica
/**
cargando → “Cargando datos...”
error    → mensaje de error
éxito    → datos del clima
vacío    → instrucción para buscar ciudad
 */

//ternario:
${this.cargando
  ? html`<p>Cargando datos...</p>`
  : html`<p>¡Datos listos!</p>`
}
/** ¿this.cargando es true?
    │
    ├── sí → muestra “Cargando datos...”
    │
    └── no → muestra “¡Datos listos!”  */

//Condición con &&:
${this.error && html`<p class="error">${this.error}</p>`}
/**¿Existe this.error?
    │
    ├── sí → muestra el párrafo de error
    └── no → no muestra ese párrafo */