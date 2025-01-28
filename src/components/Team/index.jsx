import hexToRgba from 'hex-to-rgba';
import Card from "../Card"
import "./Team.css"

const Team = ({ team, collaborators, onDelete, changeColor }) => {

   return (
       collaborators.length > 0 ? (
       <section className="team" style={{ backgroundColor: hexToRgba(team.color, "0.6") }}>
        <input 
            onChange={e => changeColor(e.target.value, team.id)}
            value={team.color} 
            type="color" 
            className="input-color" 
        />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className="collaborators">
                    {collaborators.map((collaborator, i) => 
                    <Card 
                        collaborator={collaborator}
                        key={i} 
                        bgColor={team.color}
                        onDelete={onDelete}
                    />
                )}
            </div>
        </section>)
        : ""
   )    

} 


export default Team