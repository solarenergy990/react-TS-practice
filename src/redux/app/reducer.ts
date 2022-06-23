
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import appActions from './actions';

import IContact from '../../interfaces/Contact.interface';

interface IInitialState {
  items: IContact[];
  isLoading: boolean;
  error: string;
}
const initialState: IInitialState = {
  items: [],
  isLoading: false,
  error: '',
};

const contacts = createReducer(initialState, builder => {
  builder
    .addCase(appActions.addContact, (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    })
    .addCase(appActions.deleteContact, (state, action) => {
      return {
        ...state,
        items: [
          ...state.items.filter(contact => contact.id !== action.payload),
        ],
      };
    })
    .addCase(appActions.setContacts, (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    }).addCase(appActions.contactFetchStarted, (state, action) => {
         return {
      ...state,
      isLoading: action.payload,
    };
    }).addCase(appActions.contactFetchFinished, (state, action) => {
      return {
            ...state,
            isLoading: action.payload,
          };
    }).addCase(appActions.contactFetchError, (state, action) => {
      return {
            ...state,
            error: action.payload,
          };
    })
 
});

const filter = createReducer('', builder => {
  builder.addCase(appActions.setFilter, (_, action) => {
    return action.payload;
  })
 
});

export default combineReducers({ contacts, filter });
