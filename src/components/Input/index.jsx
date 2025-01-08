import "./InputText.css"

const InputText = ({label, inputId, inputPlaceholder, isRequired, value, onChangeInput}) => {

    return (
        <div className="input-text">
            <label htmlFor={inputId}>
                {label}
            </label>
            <input 
            value={value} 
            onChange={e => onChangeInput(e.target.value)} 
            required={isRequired} 
            type="text" 
            id={inputId} 
            name={inputId} 
            placeholder={`${inputPlaceholder}...`}/>
        </div>
    )
}

export default InputText