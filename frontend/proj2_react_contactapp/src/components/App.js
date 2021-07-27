import { useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setConatcts] = useState([])

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
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App;
