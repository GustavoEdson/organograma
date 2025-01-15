import Card from "../Card"
import "./Team.css"

const Team = ({name, primaryColor, secondaryColor, collaborators}) => {
   return (
    <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor }} >{name}</h3>
        {collaborators.map(collaborator => <Card />)}
    </section>
   )
} 

export default Team