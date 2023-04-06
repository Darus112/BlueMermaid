const contactsReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return state;

    case "SET_ALL_CONTACTS":
      return action.contacts;

    default:
      return state;
  }
};

export default contactsReducer;
