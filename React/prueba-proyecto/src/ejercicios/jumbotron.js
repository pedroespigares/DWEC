function Jumbotron(props){
    return <div className="jumbotron">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <hr className="my-4"/>
        <button><a href={props.buttonURL}>{props.buttonLabel}</a></button>
    </div>
}

export default Jumbotron;