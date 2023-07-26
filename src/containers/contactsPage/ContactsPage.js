import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, onAdd}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

useEffect(() => {
  if(contacts.some(contact => contact.name === name)) {
    setDuplicate(true)
  } else {
    setDuplicate(false)
  }
}, [name])

  const handleSubmit = (e) => {

    e.preventDefault();

if(!duplicate) {
  onAdd(name, phone, email)
  setName('')
  setPhone('')
  setEmail('')
  
}
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
