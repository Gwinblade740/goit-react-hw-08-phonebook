export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfieldGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.phoneContacts = action.payload;
};

export const handleFulfieldAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.phoneContacts.push(action.payload);
};

export const handleFulfieldDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.phoneContacts.findIndex(
    contact => contact.id === action.payload
  );
  state.phoneContacts.splice(index, 1);
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
