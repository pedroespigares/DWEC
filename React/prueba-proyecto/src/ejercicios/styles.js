function Styles(){
    const styles = {
        color: "black",
        backgroundColor: "yellow",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
    }

    const styles2 = {
        color: "white",
        backgroundColor: "red",
        borderRadius: "50%",
        width: "30px",
    }

    function clickHandler(event){
        alert(`Has clicado en el título con valor ${event.target.innerText}`);
    }
    return <div>
        <h1 style={styles} onClick={clickHandler}>Alerts <h2 style={styles2}>2</h2></h1>
    </div>
}

export default Styles;