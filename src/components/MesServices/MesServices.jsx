import "./MesServices.scss"
import { mesServicesData } from "../../data/data"
import { useContext } from "react";
import { LanguageContext } from "../../context/index.jsx";

function MesServices() {
    const { lang } = useContext(LanguageContext);

    return (
        <section id="services" className="services">
            <h2 className="services__title">{lang==="fr" ? "Mes services" : "My Services"}</h2>
            <div className="services__container">
                {mesServicesData.map((item, index) => (
                    <article className="services__article" key={index}>
                        {item.picture && <img className="article__image" src={item.picture} alt={item.alt ? item.alt[lang] : ""} />}
                        {item.title && <h3 className="article__title">{item.title[lang]}</h3>}
                        {item.description && <p className="article__description">{item.description[lang]}</p>}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default MesServices