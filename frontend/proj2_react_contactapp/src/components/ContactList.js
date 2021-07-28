import ContactCard from './ContactCard'

const ContactList = (props) => {
  console.log(props)

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard key={Math.random.toString()} contact={contact}/>
    )
  })

  return(
    <div className="ui celled list">
      {renderContactList}
    </div>
  )
}

export default ContactList