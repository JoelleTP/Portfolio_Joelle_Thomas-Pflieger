import "./Banniere.scss"

function Banniere() {
    return (
        <section className="banniere">
            <img className="banniere__img" src="/assets/Image/banniere.webp" alt="ordinateur sur un bureau" />
            <div className="banniere__txt">
                <p>
                    <span className="txt__additional">Bienvenue, </span>
                    <span className="txt__additional txt__additional--color">Je suis </span>
                </p>
                <h1 className="txt__main">
                    <span>Développeur </span> 
                    <span>Web </span> 
                    <span>Front-end</span>
                </h1>
            </div>
        </section>
    )
}

export default Banniere
