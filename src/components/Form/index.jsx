import "./Form.css"
import InputText from "../Input"
import Select from "../Select"
import Button from "../Button"
import { useState } from "react"
import { v4 as uuidv4} from "uuid"

const Form = ({collaboratorRegistered, teams}) => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
 
    const handleSubmitForm = (e) => {
        e.preventDefault() 
        collaboratorRegistered({
            name,
            position,
            team,
            image,
            id: uuidv4(),
        })
        setName("")
        setPosition("")
        setImage("")
        setTeam("")
    }
    
    return (
        <section className="form">
            <form onSubmit={(e) => handleSubmitForm(e)}>
            <h2>Insect the information to make a collaborator card</h2>
            <InputText 
                isRequired={true} 
                label="Name" 
                inputId="name" 
                inputPlaceholder="Type your name"
                value={name}
                onChangeInput={value => setName(value)}
            />
            <InputText 
                isRequired={true} 
                label="Position"  
                inputId="position" 
                inputPlaceholder="Type your position"
                value={position}
                onChangeInput={value => setPosition(value)}
            />
            <InputText 
                isRequired={false} 
                label="Image" 
                inputId="image" 
                inputPlaceholder="Insect your image"
                value={image}
                onChangeInput={value => setImage(value)}
            />
            <Select 
                label="Team"
                isRequired={true}
                items={teams} 
                value={team}
                onChangeSelect={value => setTeam(value)}/>
            <Button>
                Create Card
            </Button>
            </form>
        </section>
    )
}

export default Form