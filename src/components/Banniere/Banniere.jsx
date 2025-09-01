import BanniereImage from "../../../public/assets/Image/banniere.png"
import "./Banniere.scss"

function Banniere() {
    return (
        <section className="banniere">
            <img className="banniere__img" src={ BanniereImage } alt="ordinateur sur un bureau" />
            <div className="banniere__txt">
                <p><span>Bienvenue,</span><br />Je suis<br /><strong>Développeur Web Front-end</strong></p>
            </div>
        </section>
    )
}

export default Banniere