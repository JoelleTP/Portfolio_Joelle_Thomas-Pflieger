import "./Formation.scss"
import { formationData } from "../../data/data"
import { useContext } from "react";
import { LanguageContext } from "../../context/index.jsx";

function Formation() {
    const { lang } = useContext(LanguageContext);

    return (
        <section id="formation" className="formation">
            <h2 className="formation__title">{lang==="fr" ? "Formation / Expérience" : "Education / Experience"}</h2>
            <div className="timeline">
                {formationData.map ((item, index) => (
                    <article key={index}>
                    <div className="inner">
                        {item.year && <div className="date"><span className="year">{item.year}</span></div>}
                        {item.title && <h3>{item.title[lang]}</h3>}
                        {item.description && <p>{item.description[lang]}</p>}
                    </div>
                </article>
                ))}
            </div>
        </section>
    )
}

export default Formation