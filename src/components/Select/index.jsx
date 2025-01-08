import "./Select.css"

const Select = ({name, items, isRequired, value, onChangeSelect}) => {

    return (
        <div className="select">
            <label htmlFor="select">{name}</label>
            <select 
            name="select" 
            id="select" 
            required={isRequired}
            value={value} 
            onChange={e => onChangeSelect(e.target.value)}>
            {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div> 
    )
}

export default Select