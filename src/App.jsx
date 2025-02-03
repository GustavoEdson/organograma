
import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid'



function App() {
  const [teams, setTeams] = useState ([
    {
        id: uuidv4(),
        name: 'Front-End',
        color: '#E8F8FF',
    },
    {
  
        id: uuidv4(),
        name: 'Data Science',
        color: '#F0F8E2',
    },
    {
        id: uuidv4(),
        name: 'Devops',
        color: '#FDE7E8',
    },
    {
        id: uuidv4(),
        name: 'UX e Design',
        color: '#FAE5F5',
    },
    {
        id: uuidv4(),
        name: 'Mobile',
        color: '#FFF5D9',
    },
    {
        id: uuidv4(),
        name: 'Inovação e Gestão',
        color: '#FFEEDF',
    }
  ]);

  const [collaborators, setCollaborators] = useState([])

  const deleteCollaborator = (id) => {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  const changeTeamColor = (color, id) => {
    setTeams(teams.map(team => {
        if (team.id === id) team.color = color
            return team
    }));
  }

  const registerTeam = (newTeam) => {
    setTeams([ ...teams, { ...newTeam, id: uuidv4(), }])
  }

  const resolveFavorite = (id) => {
    setCollaborators(collaborators.map(collaborator => {
      if (collaborator.id === id) collaborator.favorite = !collaborator.favorite;
        return collaborator
    }))
  }

  return (
    <div>
     
       <Banner />
       <Form
       
        registerTeam={registerTeam}
        teams={teams.map(team => team.name)} 
        collaboratorRegistered={
            collaborator => 
            setCollaborators([...collaborators, collaborator])}/>
            <section>
            <h1>My organization</h1>
            {teams.map((team, i) => 
                <Team
                    
                    onFavorite={resolveFavorite}
                    key={i}
                    team={team} 
                    changeColor={changeTeamColor}
                    collaborators={collaborators.filter(collaborator => collaborator.team === team.name) }
                    onDelete={deleteCollaborator}
                />)}
                
            </section>
        <Footer />
    </div>
  )
}

export default App 
