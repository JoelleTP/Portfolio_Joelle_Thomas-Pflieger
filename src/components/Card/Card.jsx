import "./Card.scss"

function Card ({ title, image }) {

    return (
        <div className="card">
            <img src={image} alt={title} className="card__image" />
            <div className="card__front">
                <h4 className="card__title">{title}</h4>
                <button className="card__button">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </button>
            </div>
        </div>
    )
}

export default Card