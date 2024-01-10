import React, {useState} from 'react';
import './App.css';
import './components/AddContact.js';
import AddContact from './components/AddContact.js';
import Header from './components/Header.js';
import ContactList from './components/ContactList.js'

function App() {

  const [contacts,setContacts] = useState([]);
  const addContactHandler =(contact)=>{
     console.log(contact);
     setContacts([...contacts,contact]);
  }
  return (
    <>

        <div   >
       <Header/>
       <AddContact addContactHandler = {addContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
    </>
  );
}

export default App;
