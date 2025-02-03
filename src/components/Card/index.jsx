import { IoMdCloseCircle } from "react-icons/io";
import {FaRegHeart , FaHeart} from "react-icons/fa"
import "./Card.css"

const Card = ({collaborator, bgColor, onDelete, onFavorite }) => {
    const favorite = () => onFavorite(collaborator.id)
    const propsFavorite = {size: 25, onClick: favorite}
    return (
        <div className="card">
            <IoMdCloseCircle 
                size={25} 
                className="delete" 
                onClick={() => onDelete(collaborator.id)
                }>
            </IoMdCloseCircle>
            <div className="head" style={{background: bgColor}}>
                <img src={collaborator.image} alt={collaborator.name} />
            </div>
            <div className="card-info">
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.position}</h5>
                <div className="favorite">
                  {collaborator.favorite 
                    ? <FaHeart  {...propsFavorite} style={{color: "red"}} /> 
                    : <FaRegHeart {...propsFavorite} />}
                </div>
            </div>
        </div>
    )
}

export default Card