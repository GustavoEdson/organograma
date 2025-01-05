import "./InputText.css"
import { useState } from "react"


const InputText = ({label, inputId, inputPlaceholder, isRequired}) => {
    
    // let valor = "Gustavo Edson"

    const [value, setValue] = useState("Gustavo Edson Nunes")

    const onType = (e) => {
      setValue(e.target.value)
      console.log(value);
      
    }

    return (
        <div className="input-text">
            <label htmlFor={inputId}>
                {label}
            </label>
            <input value={value} 
            onChange={onType} 
            required={isRequired} 
            type="text" 
            id={inputId} 
            name={inputId} 
            placeholder={`${inputPlaceholder}...`}/>
        </div>
    )
}

export default InputText