import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './Operation';
import {
  handleFulfieldAdd,
  handleFulfieldDelete,
  handleFulfieldGet,
  handlePending,
  handleRejected,
} from '../components/Services/FunctionSlice';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    phoneContacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfieldGet)
      .addCase(addContact.fulfilled, handleFulfieldAdd)
      .addCase(deleteContact.fulfilled, handleFulfieldDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const ContactsReducer = contactSlice.reducer;
