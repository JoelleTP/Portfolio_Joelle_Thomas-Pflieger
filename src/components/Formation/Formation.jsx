import "./Formation.scss"
import { formationData } from "../../data/data"

function Formation() {
    return (
        <section id="formation" className="formation">
            <h2 className="formation__title">Formation / Expérience</h2>
            <div className="timeline">
                {formationData.map ((item, index) => (
                    <article key={index}>
                    <div className="inner">
                        {item.year && <div className="date"><span className="year">{item.year}</span></div>}
                        {item.title && <h3>{item.title}</h3>}
                        {item.description && <p>{item.description}</p>}
                    </div>
                </article>
                ))}
            </div>
        </section>
    )
}

export default Formation