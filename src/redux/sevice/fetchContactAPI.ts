import axios from 'axios';
import IContact from '../../interfaces/Contact.interface';

// axios.defaults.baseURL = 'http://localhost:7777';

const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const postContact = async (contact: IContact) => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
const deleteContact = async (contactId: string) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

const contactAPI = {
  getContacts,
  postContact,
  deleteContact,
};

export default contactAPI;
