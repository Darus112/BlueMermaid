import axios from "axios";

export const baseURL =
  "http://localhost:5001/restaurant-website-60f84/us-central1/app";

export const validateUserJWTToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtVerification`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// adauga un nou produs
export const addNewProduct = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/products/create`, { ...data });
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// preia toate produsele
export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/all`);
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// sterge un produs
export const deleteProduct = async (productId) => {
  try {
    const res = await axios.delete(
      `${baseURL}/api/products/delete/${productId}`
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// preia toti utilizatorii
export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/users/all`);
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// adauga produs in cos
export const addNewItemToCart = async (user_id, data) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/addToCart/${user_id}`,
      { ...data }
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// preia toate itemele din cos
export const getAllCartItems = async (user_id) => {
  try {
    const res = await axios.get(
      `${baseURL}/api/products/getCartItems/${user_id}`
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// incrementeaza/decrementeaza cos
export const increaseItemQuantity = async (user_id, productId, type) => {
  console.log(user_id, productId, type);
  try {
    const res = await axios.post(
      `${baseURL}/api/products/updateCart/${user_id}`,
      null,
      { params: { productId: productId, type: type } }
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// sterge cos
export const deleteCartItems = async (userId) => {
  try {
    const res = await axios.delete(
      `${baseURL}/api/products/deleteCart/${userId}`
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// preia toate comenzile
export const getAllOrders = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/orders`);
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// updateaza statusul comenzii
export const updateOrderSts = async (order_id, sts) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/updateOrder/${order_id}`,
      null,
      { params: { sts: sts } }
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// adauga un nou mesaj de contact
export const addNewContact = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/products/create/contact`, {
      ...data,
    });
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// preia toate contactele
export const getAllContacts = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/contacts/all`);
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// sterge un contact
export const deleteContact = async (contactId) => {
  try {
    const res = await axios.delete(
      `${baseURL}/api/products/delete/contact/${contactId}`
    );
    return res.data.data;
  } catch (err) {
    return null;
  }
};
