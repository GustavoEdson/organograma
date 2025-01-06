import "./Select.css"

const Select = ({name, items, isRequired}) => {
    console.log(items);

    return (
        <div className="select">
            <label htmlFor="select">{name}</label>
            <select name="select" id="select" required={isRequired}>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select