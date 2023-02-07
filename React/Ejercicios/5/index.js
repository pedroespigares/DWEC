const app = document.getElementById("app");

function Body() {
  const elements = [
    "dog",
    "cat",
    "chicken",
    "cow",
    "sheep",
    "horse",
  ];

  const listItems = elements.map((item) => (
    <li key={item}>{item}</li>
    ));

  return <>
  <ul>
    {listItems}
  </ul>
  </>
}

ReactDOM.render(<Body />, app);
