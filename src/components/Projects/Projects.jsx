import "./Projects.scss"
import { projectsData } from "../../data/projectsData"

function Projects() {
    const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">Projets</h2>
            <form className="filtre">
                <label htmlFor="filtre-select"></label>
                <select name="filtre" id="filtre-select">
                    <option value="">Filtrer les projets par catégorie</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>{tag}</option>
                    ))}   
                </select>
            </form>
            
        </section>
    )
}

export default Projects