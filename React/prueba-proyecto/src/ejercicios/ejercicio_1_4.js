function Ejercicio_1_4(){
    const URL = [
        {name: "Google", url: "https://www.google.com"},
        {name: "Facebook", url: "https://www.facebook.com"},
        {name: "Twitter", url: "https://www.twitter.com"},
    ]

    const list = URL.map((item) => (
        <li class="nav-item" key={item.name}>
            <a class="nav-link" href={item.url}>Link to {item.name}.com</a>
        </li>
    ));

    return <>
    <ul class="nav">
        {list}
    </ul>
    </>
}

export default Ejercicio_1_4;