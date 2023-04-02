const displayOrderReducer = (state = true, action) => {
  switch (action.type) {
    case "GET_ORDER_DISPLAY_STATE":
      return state;

    case "SET_ORDER_ON":
      return true;

    case "SET_ORDER_OFF":
      return false;

    default:
      return state;
  }
};

export default displayOrderReducer;
