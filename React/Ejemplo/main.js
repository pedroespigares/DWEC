// Todos los jsx tienen que estar dentro de un tag (<></> no será un tag dentro de la página)
// Los nombres de los componentes deben empezar con mayúscula

const app = document.getElementById("app");

function Cabecera() {
  return (
    <>
      <h1>Cabecera</h1>
      <h2>Pie de la cabecera</h2>
    </>
  );
}

var pie = "Pie de la web";
var nombreDesarrollador = "Pedro";

// Para enlazar variables con jsx se usa {}

// Los props son las propiedades que se le pasan a un componente y se pueden usar dentro del componente
// Los props se pasan como atributos del componente
// Los props se pueden usar dentro del componente como si fueran variables locales pasado como parámetros

function Pie(props) {
  return (
    <h3>
      {props.textoPie} - Desarrollado por: {props.desarrollador}
    </h3>
  );
}

// Para que una variable sea reactiva se debe usar useState y setVariable para cambiar su valor

function Contador() {
  const [contador, setContador] = React.useState(0);
  
  function incrementaContador() {
    setContador(contador + 1);
  }

  return <>
  <button onClick={incrementaContador}>Aumentar</button>
  <h3>{contador}</h3>
  </>
  
}

function Cuerpo() {
  // Los bucles se hacen con map y se debe devolver un tag
  // El key es un atributo que se le pasa a cada elemento del array para que react pueda identificarlos
  // Si no se le pasa key a cada elemento del array react no podrá identificarlos y dará un error

  const names = [
    { name: "Pedro", edad: 20 },
    { name: "Juan", edad: 25 },
    { name: "Luis", edad: 30 },
  ];

  const listItems = names.map((item) => (
    <li key={item.name}>
      {item.name} - {item.edad}
    </li>
  ));

  return (
    <>
      <Cabecera />
      <h1>Cuerpo</h1>
      <ul>{listItems}</ul>
      <Contador />
      <Pie desarrollador="Pedro" textoPie="texto para pie" />
    </>
  );
}

ReactDOM.render(<Cuerpo />, app);
