render() {
  return html`<p>Hola</p>`;
}

//Siempre mostraría lo mismo: Hola

//Ahora para usar un dato del componente:
render() {
  return html`<p>Hola, ${this.nombre}</p>`;
}

//si la instancia tiene: this.nombre = "Angie" 
//la pantalla mostyraria: Hola, Angie 
//this.nombre: “el nombre guardado dentro de esta instancia concreta”

//tengo una clase conceptual llamada: MensajeBienvenida 
// q contiene: this.nombre = 'Angie'; 

//facil
render() {
  return html`<p>Bienvenida</p>`;
}

//intermedio
render() {
  return html`<p>Bienvenida, ${this.nombre}</p>`;
}