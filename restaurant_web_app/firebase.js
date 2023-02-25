const firebaseConfig = {
  apiKey: "AIzaSyDFosGHbeaAUbaLLGJ8SEmmkMqOoJp70Gg",
  authDomain: "restaurant-website-60f84.firebaseapp.com",
  databaseURL: "https://restaurant-website-60f84-default-rtdb.firebaseio.com",
  projectId: "restaurant-website-60f84",
  storageBucket: "restaurant-website-60f84.appspot.com",
  messagingSenderId: "375351911848",
  appId: "1:375351911848:web:325f6dd2fb5992f7f2699d",
  measurementId: "G-4VFG9GVZCS"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
firebase.database().ref()