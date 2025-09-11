import "./About.scss"

function About() {
    return (
        <section id="about" className="about">
            <div className="about__container">
                <h2 className="about__title">À propos</h2>
                <div className="about__content">
                    <div className="about__txt">
                        <p>En reconversion en développement web depuis 2 ans, je me suis découvert tardivement une passion pour le code. J'ai douze ans d'expérience en entreprise où j'ai pu faire de la gestion de projets et travailler en équipe. </p>
                        <div className="about__button">
                            <a href="/assets/Fichiers/CV.pdf" target="_blank">Voir le CV</a>
                            <a href="/assets/Fichiers/CV.pdf" download>Télécharger le CV</a>
                        </div>
                    </div>
                    <div className="about__photo">
                        <img className="about__img" src="/assets/Image/Photo_JTP.webp" alt="photo de Joëlle Thomas-Pflieger" />
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default About