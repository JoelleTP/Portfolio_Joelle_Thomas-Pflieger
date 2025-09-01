import "./Banniere.scss"

function Banniere() {
    return (
        <section className="banniere">
            <img className="banniere__img" src="/assets/Image/banniere.png" alt="ordinateur sur un bureau" />
            <div className="banniere__txt">
                <p><span>Bienvenue,</span><br />Je suis<br /><strong>Développeur Web Front-end</strong></p>
            </div>
        </section>
    )
}

export default Banniere