import "./Form.css"
import InputText from "../Input"
import Select from "../Select"
import Button from "../Button"
import { useState } from "react"
import { v4 as uuidv4} from "uuid"

const Form = ({collaboratorRegistered, teams, registerTeam}) => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
    const [teamName, setTeamName] = useState("")
    const [color, setColor] = useState("")
 
    const handleSubmitForm = (e) => {
        e.preventDefault() 
        collaboratorRegistered({
            name,
            position,
            team,
            image,
            id: uuidv4(),
            favorite: false,
            
        })
        setName("")
        setPosition("")
        setImage("")
        setTeam("")
       
        
    }

    const handleTeamSubmit = (e) => {
        e.preventDefault()
        registerTeam({ name: teamName, color: color })
        setColor("")
        setTeamName("")
    }
    
    return (
        <section className="container-form">
            <form className="form" onSubmit={(e) => handleSubmitForm(e)}>
                <h2>Insect the information to make a collaborator card</h2>
                <InputText 
                    isRequired 
                    label="Name" 
                    inputId="name" 
                    inputPlaceholder="Type your name"
                    value={name}
                    onChangeInput={value => setName(value)}
                />
                <InputText 
                    isRequired
                    label="Position"  
                    inputId="position" 
                    inputPlaceholder="Type your position"
                    value={position}
                    onChangeInput={value => setPosition(value)}
                />
                <InputText 
                    isRequired
                    label="Image" 
                    inputId="image" 
                    inputPlaceholder="Insect your image"
                    value={image}
                    onChangeInput={value => setImage(value)}
                />
                <Select 
                    label="Team"
                    isRequired
                    items={teams} 
                    value={team}
                    onChangeSelect={value => setTeam(value)}/>
                <Button>
                    Create Card
                </Button>
            </form>
            <form className="form" onSubmit={(e) => handleTeamSubmit(e)}>
            <h2>Insect the information to make a ne team</h2>
                <InputText 
                        isRequired
                        label="Name" 
                        inputId="name" 
                        inputPlaceholder="Type your team name"
                        value={teamName}
                        onChangeInput={value => setTeamName(value)}
                    />
                    <InputText 
                        isRequired
                        label="Color"
                        type="color"  
                        inputId="team-color" 
                        inputPlaceholder="Type your team color"
                        value={color}
                        onChangeInput={value => setColor(value)}
                    />    
                <Button>
                    Create a new Team
                </Button>
            </form>
        </section>
    )
}

export default Form