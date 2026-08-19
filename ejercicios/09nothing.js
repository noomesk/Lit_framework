import { html, nothing } from 'lit';

${this.mostrarSecreto
  ? html`<p>Secreto: 42</p>`
  : nothing}

  /**“Nothing significa: NO renderices NADA en este espacio.” */