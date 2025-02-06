import "./ViewButton.css"
import {IoIosAddCircle } from "react-icons/io";

const ViewButton = ({onRemove}) => {
    return (
        <>  
            <IoIosAddCircle size={50} className="view-btn" onClick={onRemove}/>
        </>
    )
}
export default ViewButton