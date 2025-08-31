import "./Formation.scss"

function Formation() {
    return (
        <section id="formation" className="formation">
            <h2 className="formation__title">Formation / Expérience</h2>
            <div className="timeline">
                <article>
                    <div className="inner">
                        <div className="date"><span className="year">2025</span></div>
                        <h3>Formation Intégrateur web Openclassrooms</h3>
                        <p>Certification professionnelle "Développeur Informatique"</p>
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <div className="date"><span className="year">2024</span></div>
                        <h3>Reconversion développeur web</h3>
                        <p>Autoformation pendant 1 an, création d'un site web pour un auto-entrepreneur, utilisation de html/css, javascript et php</p>
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <div className="date"><span className="year">↕</span></div>
                        <h3>Gestion de projets en entreprise</h3>
                        <p>12 années d'expérience en entreprise en tant que chargée d'affaires réglementaires, travail en équipe, gestion des changements, gestion des spécifications avec les clients, gestion de projets</p>
                    </div>
                </article>
                <article>
                    <div className="inner">
                        <div className="date"><span className="year">2012</span></div>
                        <h3>Formation ingénieur biomédical</h3>
                        <p>Langages de programmation (C++ et Java), html et CSS, développement d'un programme pour un stimulateur</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Formation