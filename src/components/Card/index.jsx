import "./Card.css"

const Card = ({name, position, }) => {
    return (
        <div className="card">
            <div className="head">
                <img src="https://github.com/GustavoEdson.png" alt="" />
            </div>
            <div className="foot">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Card