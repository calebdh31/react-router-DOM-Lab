import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const MailboxForm = ({addBox}) => {
    const navigate = useNavigate()
    const [newMailbox, setNewMailbox] = useState({boxOwner: '', boxSize: ''})

    const handleChange = (event) => {
    setNewMailbox({...newMailbox, [event.target.name] : event.target.value})
}
  const handleSubmit = (event) => {
        event.preventDefault()
        addBox(newMailbox)
        navigate('/mailboxes')
    }

  return (
    //this syntax is only for parent to child handleSubmit
     <form onSubmit={handleSubmit}> 
      <input
        name="boxOwner"
        placeholder="Mailbox Owner"
        value={newMailbox.boxOwner}
        onChange={handleChange}
      />
        <select name="boxSize" onChange={handleChange}>
          <option value="">select mailbox size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default MailboxForm