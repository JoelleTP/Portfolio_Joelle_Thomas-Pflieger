import { useContext } from "react";
import "./About.scss"
import { LanguageContext } from "../../context/index.jsx";

function About() {

     const { lang } = useContext(LanguageContext);

    return (
        <section id="about" className="about">
            <div className="about__container">
                <h2 className="about__title">{lang === "fr" ? "À propos" : "About Me"}</h2>
                <div className="about__content">
                    <div className="about__txt">

                        <p>
                            {lang === "fr" ? 
                            "En reconversion en développement web depuis 2 ans, je me suis découvert tardivement une passion pour le code. J'ai douze ans d'expérience en entreprise où j'ai pu faire de la gestion de projets et travailler en équipe." 
                            : 
                            "Transitioning to web development for the past two years, I discovered a passion for coding later in life. I have twelve years of professional experience, during which I managed projects and worked in teams."} 
                        </p>
                        <div className="about__button">
                            <a href="/assets/Fichiers/CV.pdf" target="_blank">{lang === "fr" ? "Voir le CV" : "See CV"}</a>
                            <a href="/assets/Fichiers/CV.pdf" download>{lang === "fr" ? "Télécharger le CV" : "Download CV"}</a>
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