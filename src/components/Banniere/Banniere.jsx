import BanniereImage from "../../../public/assets/Image/banniere.png"
import "./Banniere.scss"

function Banniere() {
    return (
        <section className="banniere">
            <img className="banniere__img" src={ BanniereImage } alt="ordinateur sur un bureau" />
            <div className="banniere__txt">
                <p><span>Bienvenue</span><br />sur le site de Joëlle Thomas-Pflieger,<br /><strong>Développeur Web Front-end</strong></p>
            </div>
        </section>
    )
}

export default Banniere