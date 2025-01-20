import "./Card.css"

const Card = ({name, position, image, bgColor }) => {
    return (
        <div className="card">
            <div className="head" style={{background: bgColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="card-info">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Card