import "./InputText.css"

const InputText = ({label, inputId, inputPlaceholder}) => {

    return (
        <div className="input-text">
            <label htmlFor={inputId}>{label}</label>
            <input type="text" id={inputId} name={inputId} placeholder={`${inputPlaceholder}...`}/>
        </div>
    )
}

export default InputText