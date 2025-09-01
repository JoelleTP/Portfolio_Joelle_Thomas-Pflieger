import Github from "../../../public/assets/Icone/Github_small.png"
import Linkedin from "../../../public/assets/Icone/Linkedin.png"
import Facebook from "../../../public/assets/Icone/Facebook.png"
import "./Contact.scss"


function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <div className="contact__links">
                    <h2 className="contact__title">Contact</h2>
                    <div className="contact__icon">
                        <p>Liens :</p>
                        <a href=""><img src= { Github } alt="Logo Github" /></a>
                        <a href=""><img src= { Linkedin } alt="Logo Linkedin" /></a>
                        <a href=""><img src= { Facebook } alt="Logo Facebook" /></a>
                    </div>
                    <p>Directement par email : <br /> joelle.pflieger@free.fr</p>
                    <p>ou via le formulaire de contact</p>
                </div>
                <form className="contact__form">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" />
                    <label htmlFor="lastname">Prénom</label>
                    <input type="text" id="lastname" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="message">Message</label>
                    <input type="textarea" id="message" />
                    <button type="submit">Soumettre</button>
                </form>
            </div>
        </section>
    )
}

export default Contact