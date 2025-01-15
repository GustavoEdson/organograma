import Card from "../Card"
import "./Team.css"

const Team = ({name, primaryColor, secondaryColor, collaborators}) => {

   return (
        <section className="team" style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderColor: primaryColor }}>{name}</h3>
            <div className="collaborators">
                {collaborators.map((collaborator, i)=> 
                    <Card 
                        key={i} 
                        name={collaborator.name} 
                        position={collaborator.position} 
                        image={collaborator.image}
                    />)}
                </div>
        </section>
   )
} 

export default Team