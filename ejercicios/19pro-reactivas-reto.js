//RETO: Construye los atributos de tu tag 
/**
 * Implementa la función construirAtributos que recibe un objeto de datos y
 *  devuelve un string con cada pareja en formato nombre="valor", separadas por un espacio, 
 * como los atributos que escribes en el HTML de tu componente.
 * Reglas:
 * • Recorre las parejas del objeto en su orden natural.
 * • Si el objeto está vacío, devuelve una cadena vacía.
 * Ejemplo:
 * • construirAtributos({ nombre: "Ana", activo: "true" }) → 'nombre="Ana" activo="true"'
 */

function construirAtributos(datos) {
// Recorre Object.entries(datos) y forma 'clave="valor"'
const usuario = Object.entries(datos).map(([nombre, activo]) => {
   return `${nombre}="${activo}"`; 

});

  return usuario.join(" ");
}

//llamo a la función:
construirAtributos({ nombre: "Anshi", activo: "true" })

/* Solo mejora de nombres —no de funcionamiento—: como la función recibe cualquier objeto, sería más claro usar clave y valor:

js */ 


function construirAtributos(datos) {
  const atributos = Object.entries(datos).map(([clave, valor]) => {
    return `${clave}="${valor}"`;
  });

  return atributos.join(' ');
}