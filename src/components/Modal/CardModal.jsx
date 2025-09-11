import Modal from "react-modal"
import "./CardModal.scss"
import { useContext } from "react";
import { LanguageContext } from "../../context/index.jsx";

Modal.setAppElement("#root")

const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '0',
        transform: 'translate(-50%, -50%)',
        },
    };

function CardModal ({ isOpen, onClose, title, image, description, tags, github, website }) {

    const { lang } = useContext(LanguageContext)

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel={`Détails du projet ${title}`}
        >
            <div className="modal__container">
                <div className="modal__topContainer">
                    {title && <h3 className="modal__title">{title}</h3>}
                    <button className="modal__close" aria-label={lang==="fr" ? "Fermer la fenêtre" : "Close the window"} onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
                {image && <img src={image} className="modal__image" alt={title} />}
                {description && <div className="modal__description">
                    <h4 className="modal__subtitle">Description :</h4>
                    <p>{description}</p>
                </div>}
                <div className="modal__txt">
                    {tags?.length > 0 && <div className="modal__skills">
                        <h4 className="modal__subtitle">Compétences utilisées :</h4>
                        <ul className="modal__tags">
                            {tags.map((tag, index) => (
                                <li className="tag" key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>}
                    <div className="modal__links">
                        {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={lang==="fr" ? "Voir le projet sur Github" : "See the project on Github"}><i className="fa-brands fa-github"></i></a>}
                        {website && <a href={website} target="_blank" rel="noopener noreferrer" aria-label={lang==="fr" ? "Voir le site du projet" : "See the project website"}><i className="fa-solid fa-upload"></i></a>}
                    </div>
                </div> 
            </div>
        </Modal>
    )
}

export default CardModal