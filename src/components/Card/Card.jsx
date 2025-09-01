import "./Card.scss"

function Card ({ title, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card__image" />
            <h4 className="card__title">{title}</h4>
        </div>
    )
}

export default Card