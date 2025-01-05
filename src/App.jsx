
import Banner from './components/Banner/Banner'
import InputText from './components/InputText'

function App() {

  return (
    <div>
       <Banner />
       <InputText label="Name" inputId="name" inputPlaceholder="Type your name"/>
       <InputText label="Position"  inputId="position" inputPlaceholder="Type your position"/>
       <InputText label="Image" inputId="image" inputPlaceholder="Insect your image"/>
    </div>
  )
}

export default App
