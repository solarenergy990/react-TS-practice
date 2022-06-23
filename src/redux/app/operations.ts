import appActions from './actions';
import contactAPI from '../sevice/fetchContactAPI';
import IContact from '../../interfaces/Contact.interface';
import { Dispatch } from 'redux';

const {
  addContact,
  setContacts,
  deleteContact,

  contactFetchStarted,
  contactFetchFinished,
  contactFetchError,
} = appActions;





const postContactOperation = (contact: IContact) => async (dispatch: Dispatch) => {
    console.log('dispatch in operations :',dispatch);
  dispatch(contactFetchStarted(true));
  try {
    const result = await contactAPI.postContact(contact);
    console.log('result in post', result);
    dispatch(addContact(contact));
  } catch (error: any) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished(false));
  }
};

const getContactOperation = () => async (dispatch: Dispatch) => {
  dispatch(contactFetchStarted(true));
  try {
    const result = await contactAPI.getContacts();
    dispatch(setContacts(result));
  } catch (error: any) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished(false));
  }
};

const deleteContactOperation = (contactId: string) => async (dispatch: Dispatch) => {
  dispatch(contactFetchStarted(true));
  try {
    await contactAPI.deleteContact(contactId);

    dispatch(deleteContact(contactId));
  } catch (error: any) {
    dispatch(contactFetchError(error));
  } finally {
    dispatch(contactFetchFinished(false));
  }
};

const operations = {
  postContactOperation,
  getContactOperation,
  deleteContactOperation,
};

export default operations;
