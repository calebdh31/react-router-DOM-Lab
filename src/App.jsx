import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [boxOwner, setBoxOwner] = useState("")
  const [boxSize, setBoxSize] = useState(0)
  const [mailboxes, setMailboxes] = useState([])


  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes(prevMailboxes => [...prevMailboxes, newMailbox])
  }
  return (
    <>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}/>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
      </Routes>
    </div>
   
    </>
  )
}

export default App
