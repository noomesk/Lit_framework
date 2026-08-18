import { LitElement, html, css } from 'lit';

class ListaTareas extends LitElement {
  static properties = {
    tareas: { type: Array },
    nuevaTarea: { type: String },
    filtro: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 450px;
    }
    
    .container {
      background: rgba(255, 255, 255, 0.05);
      
      
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 30px;
      
      color: white;
    }
    
    h1 {
      margin: 0 0 25px;
      color: #fff;
      text-align: center;
      font-weight: 700;
      letter-spacing: 1px;
      
    }
    
    .input-group {
      display: flex;
      gap: 12px;
      margin-bottom: 25px;
    }
    
    input[type="text"] {
      flex: 1;
      padding: 14px 20px;
      background: rgba(0, 0, 0, 0.2);
      border: 2px solid #334155;
      border-radius: 12px;
      font-size: 1rem;
      color: white;
      transition: all 0.3s;
    }
    
    input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    input:focus {
      outline: none;
      border-color: #3b82f6;
      background: rgba(0, 0, 0, 0.3);
      
    }
    
    .btn-add {
      padding: 0 24px;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: bold;
      transition: all 0.3s;
      
    }
    .btn-add:hover {
      transform: translateY(-2px);
      
    }
    .btn-add:active {
      transform: translateY(1px);
    }
    
    .filtros {
      display: flex;
      gap: 10px;
      margin-bottom: 25px;
      background: rgba(0,0,0,0.2);
      padding: 6px;
      border-radius: 12px;
    }
    
    .filtro {
      flex: 1;
      padding: 10px;
      border: none;
      background: transparent;
      border-radius: 8px;
      cursor: pointer;
      color: rgba(255,255,255,0.7);
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .filtro:hover {
      color: white;
      background: #334155;
    }
    
    .filtro.activo {
      background: #3b82f6;
      color: white;
      
    }
    
    .tarea {
      display: flex;
      align-items: center;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      margin-bottom: 12px;
      gap: 16px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .tarea:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: scale(1.02);
      border-color: #475569;
    }
    
    .tarea.completada {
      opacity: 0.5;
      background: rgba(16, 185, 129, 0.1);
      border-color: rgba(16, 185, 129, 0.2);
    }
    
    .tarea.completada .texto {
      text-decoration: line-through;
      color: #94a3b8;
    }
    
    .check {
      appearance: none;
      width: 24px;
      height: 24px;
      border: 2px solid rgba(255,255,255,0.3);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      transition: all 0.2s;
    }
    .check:checked {
      background: #10b981;
      border-color: #10b981;
    }
    .check:checked::after {
      content: '\u2713';
      position: absolute;
      color: white;
      font-weight: bold;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .texto {
      flex: 1;
      font-size: 1.05rem;
      font-weight: 500;
      transition: all 0.3s;
    }
    
    .btn-eliminar {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.3);
      width: 32px;
      height: 32px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      transition: all 0.3s;
      opacity: 0;
    }
    
    .tarea:hover .btn-eliminar {
      opacity: 1;
    }
    
    .btn-eliminar:hover {
      background: #ef4444;
      color: white;
      transform: scale(1.1) rotate(90deg);
    }
    
    .vacio {
      text-align: center;
      color: rgba(255,255,255,0.4);
      padding: 40px;
      font-style: italic;
    }
    
    .stats {
      text-align: center;
      color: rgba(255,255,255,0.6);
      font-size: 0.95rem;
      margin-top: 25px;
      font-weight: 500;
    }
  `;

  constructor() {
    super();
    this.tareas = [
      { id: 1, texto: 'Aprender Litografia', completada: true },
      { id: 2, texto: 'Crear componentes beios', completada: false },
      { id: 3, texto: 'Dominar templates muajaj', completada: false }
    ];
    this.nuevaTarea = '';
    this.filtro = 'todas';
  }

  get tareasFiltradas() {
    if (this.filtro === 'activas') return this.tareas.filter(t => !t.completada);
    if (this.filtro === 'completadas') return this.tareas.filter(t => t.completada);
    return this.tareas;
  }

  agregarTarea() {
    if (!this.nuevaTarea.trim()) return;
    this.tareas = [...this.tareas, { id: Date.now(), texto: this.nuevaTarea, completada: false }];
    this.nuevaTarea = '';
  }

  toggleTarea(id) {
    this.tareas = this.tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t);
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  handleInput(e) {
    this.nuevaTarea = e.target.value;
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') this.agregarTarea();
  }

  render() {
    const pendientes = this.tareas.filter(t => !t.completada).length;
    
    return html`
      <div class="container">
        <h1>Lista de Tareas</h1>
        
        <!-- INPUT con eventos @input y @keypress -->
        <div class="input-group">
          <input 
            type="text"
            placeholder="Nueva tarea..."
            .value="${this.nuevaTarea}"
            @input="${this.handleInput}"
            @keypress="${this.handleKeyPress}">
          <button class="btn-add" @click="${this.agregarTarea}">+</button>
        </div>
        
        <!-- FILTROS con clases condicionales -->
        <div class="filtros">
          <button 
            class="filtro ${this.filtro === 'todas' ? 'activo' : ''}"
            @click="${() => this.filtro = 'todas'}">
            Todas
          </button>
          <button 
            class="filtro ${this.filtro === 'activas' ? 'activo' : ''}"
            @click="${() => this.filtro = 'activas'}">
            Activas
          </button>
          <button 
            class="filtro ${this.filtro === 'completadas' ? 'activo' : ''}"
            @click="${() => this.filtro = 'completadas'}">
            Completadas
          </button>
        </div>
        
        <!-- LISTA con map() y condicionales -->
        ${this.tareasFiltradas.length === 0
          ? html`<div class="vacio">No hay tareas</div>`
          : this.tareasFiltradas.map(tarea => html`
              <div class="tarea ${tarea.completada ? 'completada' : ''}">
                <input 
                  type="checkbox"
                  class="check"
                  .checked="${tarea.completada}"
                  @change="${() => this.toggleTarea(tarea.id)}">
                <span class="texto">${tarea.texto}</span>
                <button 
                  class="btn-eliminar" 
                  @click="${() => this.eliminarTarea(tarea.id)}">
                  ✕
                </button>
              </div>
            `)}
            
        <div class="stats">
          ${pendientes === 0 
            ? '¡Todo listo! 🎉'
            : `${pendientes} tarea${pendientes > 1 ? 's' : ''} pendiente${pendientes > 1 ? 's' : ''}`}
        </div>
      </div>
    `;
  }
}

customElements.define('lista-tareas', ListaTareas);
