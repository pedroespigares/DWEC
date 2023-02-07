const app = document.getElementById("app");

function Button(){
    const [counter, setCounter] = React.useState(0);

    function clickHandler(){
        setCounter(counter + 1);
    }

    return <div>
        <div class="button">
            <p>Button has been clicked: {counter} times</p>
        </div>
        <div class="button">
            <button onClick={clickHandler}>Click me!</button>
        </div>
    </div>
}

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

  

  const listItems = elements.map((item) => (
    <li key={item}>
        <a href="#">{item}</a>
    </li>
    ));

  return <>
  <ul>
    {listItems}
  </ul>
    <Button/>
  </>
}

ReactDOM.render(<Body />, app);
