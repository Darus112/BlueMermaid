/**
 * Această funcție extrage informațiile utilizatorului din stocarea locală.
 * Verifică dacă elementul "user" există în stocarea locală.
 * Dacă există, funcția returnează valoarea JSON parsată a informațiilor utilizatorului.
 * Dacă nu există, funcția curăță stocarea locală și returnează undefined.
 */
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

/**
 * Această funcție recuperează informațiile despre coșul de cumpărături al utilizatorului din stocarea locală.
 * Verifică dacă elementul "cartItems" există în stocarea locală.
 * Dacă există, funcția returnează valoarea JSON parsată a informațiilor coșului.
 * Dacă nu există, funcția curăță stocarea locală și returnează un array gol.
 */
export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== undefined
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
