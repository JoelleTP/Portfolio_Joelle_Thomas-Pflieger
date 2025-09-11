import { useState } from "react"
import "./Card.scss"
import CardModal from "../Modal/CardModal";

function Card ({ title, image, description, tags, github, website }) {
    
    const[modalIsOpen, setIsOpen] = useState(false)

    return (
        
        <div className="card">
            {image && <img src={image} alt={title} className="card__image" />}
            <div className="card__front">
                {title && <h3 className="card__title">{title}</h3>}
                <button className="card__button" onClick={() => setIsOpen(true)} aria-label={`Voir les détails du projet ${title}`}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </button>
                <CardModal
                    isOpen={modalIsOpen}
                    onClose={() => setIsOpen(false)}
                    title={title}
                    image={image}
                    description={description}
                    tags={tags}
                    github={github}
                    website={website}
                />
            </div>
        </div>
    )
}

export default Card