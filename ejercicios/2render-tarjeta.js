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
 */