import "./Skills.scss"
import { skillsData } from "../../data/data";
import { LanguageContext } from "../../context";
import { useContext } from "react";

function Skills() {
    const { lang } = useContext(LanguageContext);
    return (
        <section id="skills" className="skills">
            <h2 className="skills__title">{lang==="fr" ? "Compétences" : "Skills"}</h2>
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