import "./About.scss"
import Photo from "../../../public/assets/Image/Photo_JTP.png"

function About() {
    return (
        <section id="about" className="about">
            <div className="about__content">
                <h2 className="about__title">À propos</h2>
                <p className="about__txt">En reconversion en développement web depuis 2 ans, je me suis découvert tardivement une passion pour le code. J'ai douze ans d'expérience en entreprise où j'ai pu faire de la gestion de projets et travailler en équipe. </p>
                <div className="about__button">
                    <button>Voir le CV</button>
                    <button>Télécharger le CV</button>
                </div>
            </div>
            <div className="about__photo">
                <img className="about__img" src={ Photo } alt="photo de Joëlle Thomas-Pflieger" />
            </div>    
        </section>
    )
}

export default About