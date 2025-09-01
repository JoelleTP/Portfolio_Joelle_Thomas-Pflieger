import "./Projects.scss"
import { projectsData } from "../../data/projectsData"
import Card from "../Card/Card"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
            <ResponsiveMasonry
                columnsCountBreakPoints={{350:1, 750:2, 1024:3}}
            >
                <Masonry
                    gutter="40px"
                    className="masonry__grid"
                    columnClassName="masonry__column"
                >
                    {projectsData.map((project) => (
                        <Card 
                        key={project.title}
                        title={project.title}
                        image={project.image} 
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}

export default Projects