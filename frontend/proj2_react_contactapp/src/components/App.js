import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setConatcts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact);
    setConatcts([...contacts, contact])
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) setConatcts(retrieveContacts)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  // const contacts = [
  //   {
  //     id: 1,
  //     "name":"ShivBaba",
  //     "email":"shivbaba@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     "name":"BramhaBaba",
  //     "email":"bramhababa@gmail.com"
  //   }
  // ]

  return(
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App;
