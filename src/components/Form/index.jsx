import "./Form.css"
import InputText from "../Input"
import Select from "../Select"
import Button from "../Button"
import { useState } from "react"

const Form = ({addNewCollaborator, teams}) => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
 
    const handleSubmitForm = (e) => {
        e.preventDefault() 
        addNewCollaborator({
            name,
            position,
            team,
            image
        })
        
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
            <Select name="Team" 
                items={teams} 
                onChangeSelect={value => setTeam(value)}/>
            <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form