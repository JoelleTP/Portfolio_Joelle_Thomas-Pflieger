import "./Banniere.scss"

function Banniere() {
    return (
        <section className="banniere">
            <img className="banniere__img" src="/assets/Image/banniere.png" alt="ordinateur sur un bureau" />
            <div className="banniere__txt">
                <p className="txt__additional">Bienvenue,</p>
                <p className="txt__additional txt__additional--color">Je suis</p>
                <p className="txt__main">
                    <span>Développeur </span> 
                    <span>Web </span> 
                    <span>Front-end</span>
                </p>
            </div>
        </section>
    )
}

export default Banniere