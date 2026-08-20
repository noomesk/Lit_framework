/**
 * Implementa la función listaDeCompras que recibe un array de artículos y 
 * devuelve un string con una lista HTML: un "<ul>" que envuelve un 
 * "<li>articulo</li>" por cada artículo.
 * Reglas:
 * -Usa map para transformar cada artículo y join para unirlos sin comas.
 * Si el array está vacío, devuelve solo "<ul></ul>".


 *
 * @param {string[]} items - Array de artículos que se convertirán en elementos <li>.
 * @returns {string} Una lista HTML con los artículos dentro de un elemento <ul>.
 */
function listaDeCompras(items) {
  // Transforma cada item en "<li>item</li>" y únelos dentro de <ul>...</ul>

  const resultado = items.map(item => {
    return `<li>${item}</li>`;
  });

  const resp = resultado.join("");

  return `<ul>${resp}</ul>`;
}