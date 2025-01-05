import "./Select.css"

const Select = ({name}) => {
    const teams = [
        "Programmers",
        "UX/UI",
        "Data Science", 
        "Devops", 
        "Mobile", 
        "Innovation"
    ]

    return (
        <div className="select">
            <label htmlFor="select">{name}</label>
            <select name="select" id="select">
                {teams.map(team => <option key={team}>{team}</option>)}
            </select>
        </div>
    )
}

export default Select