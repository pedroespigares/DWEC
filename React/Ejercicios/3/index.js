const app = document.getElementById("app");

function Button(props){
    function clickHandler(){
        alert("You clicked on button " + props.number + "!");
    }

    return <button onClick={clickHandler}>Button {props.number}</button>
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
    <div id="button">
        <Button number="1"/>
        <Button number="2"/>
        <Button number="3"/>
    </div>
  </>
}

ReactDOM.render(<Body />, app);
