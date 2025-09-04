import "./Projects.scss"
import { projectsData } from "../../data/projectsData"
import Card from "../Card/Card"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

function Projects() {
    const allTags = [...new Set(projectsData.flatMap(project => project.tags))];
    const [data, setData] = useState(projectsData);
    const handleChange = (e) => {
        if (e.target.value) {
            const result = projectsData.filter((project) => project.tags.includes(e.target.value))
            setData(result)
        }
        else {
            setData(projectsData)
        }
        
    }
    const getColumnsNumber = (count) => {
        if (count === 1) return 1;          // un seul projet → 1 colonne
        if (count % 2 === 0) return 2;      // pair → 2 colonnes
        return 3;                           // impair (>1) → 3 colonnes
    };


    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">Projets</h2>
            <form className="filtre">
                <label htmlFor="filtre-select"></label>
                <select name="filtre" id="filtre-select" onChange={handleChange}>
                    <option value="">Filtrer les projets par catégorie</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>{tag}</option>
                    ))}   
                </select>
            </form>
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    350: 1,      // sur petit écran, toujours 1 colonne
                    750: Math.min(getColumnsNumber(data.length), 2), // max 2 colonnes en medium
                    1024: getColumnsNumber(data.length),             // règle personnalisée en grand
                }}
                gutterBreakPoints={{0 : "30px"}}
            >
                <Masonry
                    className={`masonry__grid ${data.length === 1 ? "masonry__grid--single" : ""}`}
                    columnClassName="masonry__column"
                >
                    {data.map((project) => (
                        <Card 
                        key={project.title}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        tags={project.tags}
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