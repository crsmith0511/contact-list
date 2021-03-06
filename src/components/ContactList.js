import { Switch, Route } from 'react-router-dom'
import React from 'react';
import IndividualContactDisplay from './IndvidualContactDisplay';
import NewContact from './NewContact';
import FullContactList from './FullContactList';

const ContactList = ({contacts, addContact}) => (
    <Switch>    
    <Route path='/contacts/new' render={(routerProps) => (
      <NewContact history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>
  
    <Route path='/contacts/:id' render={(routerProps) => (
      <IndividualContactDisplay contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>
    
    <Route path='/contacts' render={() => (
      <FullContactList contacts={contacts} />
    )}/>
  </Switch>
)
  
  export default ContactList