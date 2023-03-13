import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import './styles.css';

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: 'Beyza',
            phone_number: '123123123'
        },
        {
            fullname: 'Ayşe',
            phone_number: '2635264349'
        },
        {
            fullname: 'Ahmet',
            phone_number: '0897543423'
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])  

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form setContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;