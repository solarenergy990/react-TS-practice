import type { RootState } from "../store";


const getContactList = (state: RootState) => state.appState.contacts.items;
const getContactFilter = (state: RootState) => state.appState.filter;
const getContactLoading = (state: RootState) => state.appState.contacts.isLoading;
const getContactError = (state: RootState) => state.appState.contacts.error;

const appSelectors = {
  getContactList,
  getContactFilter,
  getContactLoading,
  getContactError,
};

export default appSelectors;
