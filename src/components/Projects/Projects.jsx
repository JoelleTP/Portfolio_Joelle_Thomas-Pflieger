import "./Projects.scss"
import { projectsData } from "../../data/data"
import Card from "../Card/Card"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context";

function Projects() {
    const { lang } = useContext(LanguageContext);
    const allTags = [...new Set(projectsData.flatMap(project => project.tags[lang]))];
    const [data, setData] = useState(projectsData);
    const handleChange = (e) => {
        if (e.target.value) {
            const result = projectsData.filter((project) => project.tags[lang].includes(e.target.value))
            setData(result)
        }
        else {
            setData(projectsData)
        }
        
    }
    const getColumnsNumber = (count) => {
        if (count === 1) return 1;       
        if (count % 2 === 0) return 2;      
        return 3;                        
    };

    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">{lang==="fr" ? "Projets" : "Projects"}</h2>
            <form className="filtre">
                <label htmlFor="filtre-select">{lang==="fr" ? "Filtrer les projets" : "Filter projects"}</label>
                <select name="filtre" id="filtre-select" onChange={handleChange}>
                    <option value="">{lang==="fr" ? "Tous" : "All"}</option>
                    {allTags.length > 0 && allTags.map((tag, index) => (
                        <option key={index} value={tag}>{tag}</option>
                    ))}   
                </select>
            </form>
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    350: 1,
                    750: Math.min(getColumnsNumber(data.length), 2), 
                    1024: getColumnsNumber(data.length),
                }}
                gutterBreakPoints={{0 : "30px"}}
            >
                <Masonry
                    className={`masonry__grid ${data.length === 1 ? "masonry__grid--single" : ""}`}
                    columnClassName="masonry__column"
                >
                    {data.map((project) => (
                        <Card 
                        key={project.id}
                        title={project.title[lang]}
                        image={project.image}
                        description={project.description[lang]}
                        tags={project.tags[lang]}
                        github={project.github}
                        website={project.website} 
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}

export default Projects