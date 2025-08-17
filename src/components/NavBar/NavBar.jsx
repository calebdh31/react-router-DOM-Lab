import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
       <nav>
      <h2></h2>
      <ul>
        <li><link to="/">Home</link></li>
        <li><link to="/mailboxes">Mailboxes</link></li>
        <li><link to="/new-mailbox">New Mailbox</link></li>
      </ul>
    </nav>
  )
}

export default NavBar