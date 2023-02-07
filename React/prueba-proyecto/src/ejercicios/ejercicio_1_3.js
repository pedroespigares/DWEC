function Ejercicio_1_3(){
    const data = {
        image: "../../.learn/assets/Dylan.png?raw=true",
        cardTitle: "Bob Dylan",
        cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
        button: {
          url: "https://en.wikipedia.org/wiki/Bob_Dylan",
          label: "Go to wikipedia"
        }
    };

    return <>
        <div class="card m-5">
        <img class="card-img-top" src={data.image} alt={data.cardTitle}/>
        <div class="card-body">
            <h5 class="card-title">{data.cardTitle}</h5>
            <p class="card-text">{data.cardDescription}</p>
            <a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
        </div>
        </div>
    </>
}

export default Ejercicio_1_3;