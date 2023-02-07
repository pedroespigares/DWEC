const app = document.getElementById("app");

function List({elements}){
    const listItems = elements.map((item) => (
        <li key={item}>{item}</li>
    ));
    return <ul>
        {listItems}
    </ul>
}

function Body() {
  const animals = [
    "🐶 dog",
    "😺 cat",
    "🐔 chicken",
    "🐮 cow",
    "🐑 sheep",
    "🐴 horse",
  ];

  return <List elements={animals}/>
}

ReactDOM.render(<Body />, app);
