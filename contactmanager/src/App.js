import './App.css';
import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/navBar'
import ContactList from './components/Contacts/ContactList/ContactList'
import AddContact from './components/Contacts/AddContact/AddContact';
import ViewContact from './components/Contacts/ViewContact/ViewContact';
import EditContact from './components/Contacts/EditContact/EditContact';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element = {<ContactList/>}/>
        <Route path = {'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactID'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactID'} element={<EditContact/>}/>
      
      </Routes>
      
    </React.Fragment>
  );
}

export default App;
