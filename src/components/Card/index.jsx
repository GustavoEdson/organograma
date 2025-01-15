import "./Card.css"

const Card = ({name, position, image }) => {
    return (
        <div className="card">
            <div className="head">
                <img src={image} alt={name} />
            </div>
            <div className="foot">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Card