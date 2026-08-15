//sencillo:
static properties = {
  nombre: { type: String }
};

//intermedio: reconoce dos datos:
static properties = {
  nombre: { type: String },
  cargo: { type: String }
};

//aplicado al ejercicio anterior:

<tarjeta-perfil
  nombre="Angie"
  cargo="Software developer">
</tarjeta-perfil>

//static properties declara los datos que Lit debe
// reconocer como propiedades del componente.