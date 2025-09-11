import Github from "../../../public/assets/Icone/Github_small.webp"
import Linkedin from "../../../public/assets/Icone/Linkedin.webp"
import "./Contact.scss"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import CardModal from "../Modal/CardModal";


function Contact() {
    const form = useRef()
    const [status, setStatus] = useState(null)
    const[modalIsOpen, setIsOpen] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            await emailjs.sendForm("service_hgemkxu", "template_r2t6ncj", form.current, "MTYuB7VkDmfCgi_b_")
            setStatus("success")
            form.current.reset()
            setIsOpen(true)
        }
        catch {
            setStatus("error")
            setIsOpen(true)
        }
    }

    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <div className="contact__links">
                    <h2 className="contact__title">Contact</h2>
                    <div className="contact__icon">
                        <p>Liens :</p>
                        <a href="https://github.com/JoelleTP" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Profil Github de Joëlle Thomas-Pflieger" /></a>
                        <a href="https://www.linkedin.com/in/joëlle-pflieger-4b2642194" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Profil LinkedIn de Joëlle Thomas-Pflieger" /></a>
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
                    <CardModal
                        isOpen={modalIsOpen}
                        onClose={() => setIsOpen(false)}
                        title={status === "success" ? "✅ Message envoyé avec succès !" : "❌ Erreur lors de l'envoi, merci de réessayer."}
                    />
                </form>
            </div>
        </section>
    )
}

export default Contact