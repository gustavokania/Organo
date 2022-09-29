import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

function App() {
  const [contributors, setContributors] = useState([])

  const onAddedContributor = contributor => {
    console.log(contributor)
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner />
      <Form onNewContributor={contributor => onAddedContributor(contributor)} />
    </div>
  )
}

export default App
