import { createAction } from '@reduxjs/toolkit';
import IContact from '../../interfaces/Contact.interface';

const addContact = createAction<IContact,'app/addContact'> ('app/addContact');

const setContacts = createAction<IContact[],'app/setContacts'>('app/setContacts');

const deleteContact = createAction<string,'app/deleteContact'>('app/deleteContact');

const contactFetchStarted = createAction<boolean, 'app/contactFetchStart'>('app/contactFetchStart');

const contactFetchFinished = createAction<boolean, 'app/contactFetchStart'>('app/contactFetchStart');

const contactFetchError = createAction<string, 'app/contactFetchError'>('app/contactFetchError');

const setFilter = createAction<string, 'app/setFilter'>('app/setFilter');

const appActions = {
  addContact,
  setContacts,
  deleteContact,
  setFilter,
  contactFetchStarted,
  contactFetchFinished,
  contactFetchError,
};

export default appActions;
