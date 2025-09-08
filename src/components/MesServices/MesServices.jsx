import "./MesServices.scss"

function MesServices() {
    return (
        <section id="services" className="services">
            <h2 className="services__title">Mes services</h2>
            <div className="services__container">
                <article className="services__article">
                    <img className="article__image" src="/assets/Image/Creation.jpg" alt="symbole de créativité" />
                    <h3 className="article__title">Création de site web</h3>
                    <p className="article__description">Création d'un site web de A à Z et discussion avec le client pour la mise en place du design</p>
                </article>
                <article className="services__article">
                    <img className="article__image" src="/assets/Image/SEO.png" alt="symbole de SEO" />
                    <h3 className="article__title">Accessibilité / SEO / Eco-conception</h3>
                    <p className="article__description">Amélioration de l'accessibilité d'un site web existant pour les personnes handicapées ou amélioration de la visibilité du site sur le réseau</p>
                </article>
                <article className="services__article">
                    <img className="article__image" src="/assets/Image/Debogage.jpg" alt="symbole de réparation" />
                    <h3 className="article__title">Débogage de site web</h3>
                    <p className="article__description">Revue / reprise d'un site web existant pour réparer les bugs</p>
                </article>
            </div>
        </section>
    )
}

export default MesServices