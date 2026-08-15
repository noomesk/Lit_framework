/**
 * TarjetaPerfil
│
├── render()
│   └── produce HTML
│
└── static styles
    └── define la apariencia de ese HTML
             │
             ▼
     Tarjeta visible y estilizada
 */

     //básico
static styles = css`
  p {
    color: blue;
  }
`;

//intermedio:
static styles = css`
  .card {
    padding: 16px;
    border-radius: 8px;
  }
`;

//ejemplo:
static styles = css`
  :host {
    display: inline-block;
    margin: 10px;
  }

  .card {
    padding: 30px;
    border-radius: 8px;
    width: 280px;
    text-align: center;
    color: white;
    background: #0284c7;
  }
`;