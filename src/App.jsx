
import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [collaborators, setCollaborators] = useState([])
  
  return (
    <div>
       <Banner />
       <Form onCollaborator={collaborator => setCollaborators([...collaborators, collaborator])}/>
    </div>
  )
}

export default App
