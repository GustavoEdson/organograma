import "./Input.css"

const InputText = ({type = "text", label, inputId, inputPlaceholder, isRequired, value, onChangeInput}) => {
    return (
        <div className={`input input-${type}`}>
            <label htmlFor={inputId}>
                {label}
            </label>
            <input
                type={type}
                value={value} 
                onChange={e => onChangeInput(e.target.value)}
                required={isRequired} 
                id={inputId} 
                name={inputId} 
                placeholder={`${inputPlaceholder}...`}
            />
        </div>
    )
}

export default InputText