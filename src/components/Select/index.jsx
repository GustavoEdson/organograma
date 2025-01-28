import "./Select.css"

const Select = ({label, items, isRequired, value, onChangeSelect}) => {

    return (
        <div className="select">
            <label htmlFor="select">{label}</label>
                <select 
                    name="select" 
                    id="select" 
                    required={isRequired}
                    value={value} 
                    onChange={e => onChangeSelect(e.target.value)}>
                    <option value=""></option>
                    {items.map((item, i) => {
                        return  <option key={i}>{item}</option>
                    })}
                </select>
        </div> 
    )
}

export default Select