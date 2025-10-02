import { useContext } from "react";
import "./About.scss"
import { LanguageContext } from "../../context/index.jsx";
import { aboutData } from "../../data/data"

function About() {

     const { lang } = useContext(LanguageContext);

    return (
        <section id="about" className="about">
            <div className="about__container">
                <h2 className="about__title">{lang === "fr" ? "À propos" : "About Me"}</h2>
                <div className="about__content">
                    <div className="about__txt">
                        <p>{aboutData.description[lang]}</p>
                        <p>{aboutData.opening[lang]}</p>
                        <div className="about__button">
                            <a href={lang === "fr" ? "/assets/Fichiers/CV_FR.pdf" : "/assets/Fichiers/CV_EN.pdf"} download>{lang === "fr" ? "Télécharger le CV" : "Download CV"}</a>
                        </div>
                    </div>
                    <div className="about__photo">
                        <img className="about__img" src="/assets/Image/Photo_JTP.webp" alt={lang==="fr" ? "photo de Joëlle Thomas-Pflieger" : "Joëlle Thomas-Pflieger photo"} />
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default About