/**
 * Genera una lista HTML a partir de un array de artículos.
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