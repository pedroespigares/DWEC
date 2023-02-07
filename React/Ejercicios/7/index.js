const app = document.getElementById("app");


function Body() {

    // Los formularios en React se manejan con el evento onSubmit y onChange
    // onSubmit: se ejecuta cuando se envía el formulario
    // onChange: se ejecuta cuando se cambia el valor de un input

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    function submitHandler(event){
        event.preventDefault();
        alert(`Hello ${firstName} ${lastName}!`);
    }

    function changeHandler(event){
        if(event.target.name === "firstName"){
            setFirstName(event.target.value);
        } else if(event.target.name === "lastName"){
            setLastName(event.target.value);
        }
    }

    return <form onSubmit={submitHandler}>
        <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={changeHandler}/>
        <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={changeHandler}/>
        <input type="submit" value="Submit"/>
        <p>{firstName} {lastName}</p>
    </form>
}

ReactDOM.render(<Body />, app);
