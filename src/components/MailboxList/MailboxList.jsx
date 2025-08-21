import React from 'react'

const MailboxList = ({mailboxes}) => {

  return (
     <div className="mailboxesDiv">{mailboxes.map((mailbox, index)  => (
        <div>

         <h1>Mailbox: {mailbox._id}</h1>
         <h2>Details:</h2>   
        <p>Boxholder: {mailbox.boxOwner}</p>
        <p>Box Size: {mailbox.boxSize}</p>
        </div>
  ))}</div>
  )
}

export default MailboxList