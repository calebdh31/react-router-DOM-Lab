import React from 'react'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
)
  return (
    <div>MailboxDetails</div>
  )
}

export default MailboxDetails 