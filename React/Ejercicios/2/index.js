const app = document.getElementById("app");

function Body() {
  const elements = [
    "Home",
    "Exercise 1",
    "Exercise 2",
    "Exercise 3",
    "Exercise 4",
    "Exercise 5",
    "Exercise 6",
    "Exercise 7",
    "Exercise 8",
    "Exercise 9",
  ];

  function clickHandler(){
    alert("Clicked!");
  }

  const listItems = elements.map((item) => (
    <li key={item}>
        <a href="#">{item}</a>
    </li>
    ));

  return <>
  <ul>
    {listItems}
  </ul>
  <div id="button">
    <button onClick={clickHandler}>Click me!</button>
  </div>
  </>
}

ReactDOM.render(<Body />, app);
