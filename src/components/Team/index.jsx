import Card from "../Card"
import "./Team.css"

const Team = ({name, primaryColor, secondaryColor, collaborators}) => {

   return (
       collaborators.length > 0 ? (<section className="team" style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderColor: primaryColor }}>{name}</h3>
            <div className="collaborators">
                    {collaborators.map((collaborator) => 
                    <Card key={collaborator.name} name={collaborator.name} 
                    position={collaborator.position} 
                    image={collaborator.image} bgColor={primaryColor}/>)}
            </div>
        </section>)
        : ""
   )    
} 

export default Team