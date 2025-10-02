import Github from "../../../public/assets/Icone/Github_small.webp"
import Linkedin from "../../../public/assets/Icone/Linkedin.webp"
import "./Contact.scss"
import { useContext, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import CardModal from "../Modal/CardModal";
import { LanguageContext } from "../../context"


function Contact() {
    const { lang } = useContext(LanguageContext)
    const form = useRef()
    const [status, setStatus] = useState(null)
    const[modalIsOpen, setIsOpen] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setStatus("success")
            form.current.reset()
            setIsOpen(true)
        }
        catch {
            setStatus("error")
            setIsOpen(true)
        }
    }

    const text = {
        title: { fr: "Contact", en: "Contact" },
        links: { fr: "Liens :", en: "Links:" },
        alt: {
            github: { fr: "Profil Github de Joëlle Thomas-Pflieger", en: "Joëlle Thomas-Pflieger's Github Profile" },
            linkedin: { fr: "Profil Linkedin de Joëlle Thomas-Pflieger", en: "Joëlle Thomas-Pflieger's Linkedin Profile" }, 
        },
        emailContact: {
            fr: "Directement par email :",
            en: "Directly by email:"
        },
        formContact: {
            fr: "ou via le formulaire de contact",
            en: "or via the contact form"
        },
        labels: {
            name: { fr: "Nom", en: "Name" },
            email: { fr: "Email", en: "Email" },
            subject: { fr: "Objet", en: "Subject" },
            message: { fr: "Message", en: "Message" }
        },
        submit: { fr: "Soumettre", en: "Submit" },
        success: { fr: "✅ Message envoyé avec succès !", en: "✅ Message sent successfully!" },
        error: { fr: "❌ Erreur lors de l'envoi, merci de réessayer.", en: "❌ Error sending message, please try again." }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <div className="contact__links">
                    <h2 className="contact__title">{text.title[lang]}</h2>
                    <div className="contact__icon">
                        <p>{text.links[lang]}</p>
                        <a href="https://github.com/JoelleTP" target="_blank" rel="noopener noreferrer"><img src={Github} alt={text.alt.github[lang]} /></a>
                        <a href="https://www.linkedin.com/in/joëlle-pflieger-4b2642194" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt={text.alt.linkedin[lang]} /></a>
                    </div>
                    <p className="contact__txt">{text.emailContact[lang]} <br /> joelle.pflieger@free.fr</p>
                    <p className="contact__txt">{text.formContact[lang]}</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <label htmlFor="name">{text.labels.name[lang]}</label>
                    <input className="form__name" type="text" name="name" id="name" required />
                    <label htmlFor="email">{text.labels.email[lang]}</label>
                    <input className="form__email"type="email" name="email" id="email" required />
                    <label htmlFor="subject">{text.labels.subject[lang]}</label>
                    <input className="form__object" type="text" name="subject" id="subject" required />
                    <label htmlFor="message">{text.labels.message[lang]}</label>
                    <textarea className="form__message" name="message" id="message" required />
                    <button className="form__button" type="submit">{text.submit[lang]}</button>
                    <CardModal
                        isOpen={modalIsOpen}
                        onClose={() => setIsOpen(false)}
                        title={status === "success" ? text.success[lang] : text.error[lang]}
                    />
                </form>
            </div>
        </section>
    )
}

export default Contact