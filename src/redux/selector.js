export const selectContacts = state => state.contacts.phoneContacts;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectLogIn = state => state.user.isLoggedIn;

export const selectName = state => state.user.user.name;

export const selectIsRefreshing = state => state.user.isRefreshing;
