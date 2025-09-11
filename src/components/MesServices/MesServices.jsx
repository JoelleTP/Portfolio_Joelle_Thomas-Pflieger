import "./MesServices.scss"
import { mesServicesData } from "../../data/data"

function MesServices() {
    return (
        <section id="services" className="services">
            <h2 className="services__title">Mes services</h2>
            <div className="services__container">
                {mesServicesData.map((item, index) => (
                    <article className="services__article" key={index}>
                        {item.picture && <img className="article__image" src={item.picture} alt={item.alt ? item.alt : ""} />}
                        {item.title && <h3 className="article__title">{item.title}</h3>}
                        {item.description && <p className="article__description">{item.description}</p>}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default MesServices