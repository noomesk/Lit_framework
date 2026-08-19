html`<button disabled="${this.deshabilitado}">Click</button>`
html`<button ?disabled="${this.deshabilitado}">Click</button>`

//¿cuál es la diferencia?
/** 
 * R//Sin ?: El atributo siempre estará presente. Si deshabilitado es false, el HTML será disabled="false" (que irónicamente aún así deshabilita el botón porque en HTML la sola presencia del atributo cuenta).

Con ?: El atributo se agrega o elimina según el valor booleano. Si es false, el atributo simplemente desaparece del DOM.

Regla de Oro: Usa ? para atributos booleanos de HTML nativo como disabled, hidden, checked, readonly.
 */