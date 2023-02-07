function Alert({show, text, color}){
    const colorClasses = {
        "red": "alert-danger",
        "green": "alert-success",
        "yellow": "alert-warning",
        "blue": "alert-primary"
    }

    if(!show){
        return null;
    }
    else{
        return (
            <div class={`alert ${colorClasses[color]}`} role="alert">
                {text}
            </div>
        );
    }
}

export default Alert;