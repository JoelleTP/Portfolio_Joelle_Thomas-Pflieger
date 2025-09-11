import "./Skills.scss"
import { skillsData } from "../../data/data";

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2 className="skills__title">Compétences</h2>
            <div className="skills__carousel">
                <ul className="carousel__gallery">
                    {skillsData.map((skill, index) => (
                        <li key={index} className={`gallery__card timer-${index + 1}`}>
                            <div className="card__content">
                                {skill.title && <span>{skill.title}</span>}
                                {skill.logo && <img src={skill.logo} alt={`logo ${skill.title}`} />}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills