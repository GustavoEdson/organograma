import "./Form.css"
import InputText from "../InputText"
import Select from "../Select"
import Button from "../Button"

const Form = () => {
    return (
        <section className="form">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Insect the information to make a collaborator card</h2>
                <InputText isRequired={true} label="Name" inputId="name" inputPlaceholder="Type your name"/>
                <InputText isRequired={true} label="Position"  inputId="position" inputPlaceholder="Type your position"/>
                <InputText isRequired={false} label="Image" inputId="image" inputPlaceholder="Insect your image"/>
                <Select name="Team"/>
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form