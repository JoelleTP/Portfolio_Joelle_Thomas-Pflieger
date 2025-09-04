import { useState } from "react"
import "./Card.scss"
import Modal from "react-modal"

Modal.setAppElement("#root")

function Card ({ title, image, description, tags, github, website }) {
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
    const[modalIsOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    return (
        
        <div className="card">
            <img src={image} alt={title} className="card__image" />
            <div className="card__front">
                <h4 className="card__title">{title}</h4>
                <button className="card__button" onClick={openModal}>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </button>
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    <div className="modal__container">
                        <div className="modal__topContainer">
                            <h4 className="modal__title">{title}</h4>
                            <button className="modal__close" onClick={closeModal}><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <img src={image} className="modal__image" alt={title} />
                        <div className="modal__description">
                            <h5 className="modal__subtitle">Description :</h5>
                            <p>{description}</p>
                        </div>
                        <div className="modal__txt">
                        <div className="modal__skills">
                            <h5 className="modal__subtitle">Compétences utilisées :</h5>
                            <ul className="modal__tags">
                                {tags.map((tag, index) => (
                                    <li className="tag" key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal__links">
                            <a href={github} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                            <a href={website}  target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-upload"></i></a>
                        </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Card