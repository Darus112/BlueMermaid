export const setAllContacts = (contacts) => {
  return {
    type: "SET_ALL_CONTACTS",
    contacts: contacts,
  };
};

export const getAllContacts = () => {
  return {
    type: "GET_ALL_CONTACTS",
  };
};
