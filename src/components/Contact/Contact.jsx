import Github from "../../../public/assets/Icone/Github_small.png"
import Linkedin from "../../../public/assets/Icone/Linkedin.png"
import Facebook from "../../../public/assets/Icone/Facebook.png"
import "./Contact.scss"
import { useRef } from "react"
import emailjs from "@emailjs/browser"


function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_hgemkxu", "template_r2t6ncj", form.current, "MTYuB7VkDmfCgi_b_").then(
            () => {
                alert("Message envoyé")
                form.current.reset();
            },
            (error) => {
                alert("Erreur lors de l'envoi, merci de réessayer", error)
            }
        )
    }
    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <div className="contact__links">
                    <h2 className="contact__title">Contact</h2>
                    <div className="contact__icon">
                        <p>Liens :</p>
                        <a href="https://github.com/JoelleTP" target="_blank"><img src= { Github } alt="Logo Github" /></a>
                        <a href="https://www.linkedin.com/in/joëlle-pflieger-4b2642194" target="_blank"><img src= { Linkedin } alt="Logo Linkedin" /></a>
                    </div>
                    <p className="contact__txt">Directement par email : <br /> joelle.pflieger@free.fr</p>
                    <p className="contact__txt">ou via le formulaire de contact</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <label htmlFor="name">Nom</label>
                    <input className="form__name" type="text" name="name" id="name" required />
                    <label htmlFor="email">Email</label>
                    <input className="form__email"type="email" name="email" id="email" required />
                    <label htmlFor="subject">Objet</label>
                    <input className="form__object" type="text" name="subject" id="subject" required />
                    <label htmlFor="message">Message</label>
                    <textarea className="form__message" name="message" id="message" required />
                    <button className="form__button" type="submit">Soumettre</button>
                </form>
            </div>
        </section>
    )
}

export default Contact