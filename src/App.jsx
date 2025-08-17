import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'

function App() {
  const [boxOwner, setBoxOwner] = useState("")
  const [boxSize, setBoxSize] = useState(0)

  return (
    <>
    <div>
      <h1>Hello world</h1>
    </div>
    </>
  )
}

export default App
