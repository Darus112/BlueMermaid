> APLICAȚIE WEB DE MANAGEMENT ȘI CONTROL AL COMENZILOR ÎNTR-UN RESTAURANT

# Structura aplicației

Aplicația este structurată în două părți principale: partea de client (frontend) și partea de server (backend), ambele fiind integrate în cadrul unei structuri de proiect clar definite.

```
Licenta
├── client
│   ├── public
│   │   ├── index.html
│   │   └── index.css
│   ├── src
│   │   ├── animation
│   │   │   └── index.js
│   │   ├── api
│   │   │   └── index.js
│   │   ├── assets
│   │   │   ├── FoodImages
│   │   │   └── Images
│   │   ├── components
│   │   │   ├── dashboard
│   │   │   │   ├── DBContacts.js
│   │   │   │   ├── DBHeader.js
│   │   │   │   ├── DBHome.js
│   │   │   │   ├── DBItems.js
│   │   │   │   ├── DBLeftSection.js
│   │   │   │   ├── DBNewItem.js
│   │   │   │   ├── DBOrders.js
│   │   │   │   ├── DBRightSection.js
│   │   │   │   └── DBUsers.js
│   │   │   ├── Alert.js
│   │   │   ├── Cart.js
│   │   │   ├── CheckOutSuccess.js
│   │   │   ├── ContactData.js
│   │   │   ├── DataTable.js
│   │   │   ├── DetailsCard.js
│   │   │   ├── FilterSection.js
│   │   │   ├── Footer.js
│   │   │   ├── LoginInput.js
│   │   │   ├── MainLoader.js
│   │   │   ├── Navbar.js
│   │   │   ├── OrderData.js
│   │   │   ├── ProgressBar.js
│   │   │   ├── SimpleLoader.js
│   │   │   ├── Slider.js
│   │   │   └── SliderCard.js
│   │   ├── config
│   │   │   └── firebase.config.js
│   │   ├── context
│   │   │   ├── actions
│   │   │   │   ├── alertActions.js
│   │   │   │   ├── allUsersActions.js
│   │   │   │   ├── cartActions.js
│   │   │   │   ├── contactActions.js
│   │   │   │   ├── displayCartAction.js
│   │   │   │   ├── displayOrderAction.js
│   │   │   │   ├── ordersActions.js
│   │   │   │   ├── productActions.js
│   │   │   │   └── userActions.js
│   │   │   └── reducers
│   │   │       ├── alertReducer.js
│   │   │       ├── allUserReducer.js
│   │   │       ├── cartReducer.js
│   │   │       ├── contactsReducer.js
│   │   │       ├── displayCartReducer.js
│   │   │       ├── displayOrderReducer.js
│   │   │       ├── index.js
│   │   │       ├── ordersReducer.js
│   │   │       ├── productReducer.js
│   │   │       └── userReducer.js
│   │   ├── pages
│   │
|   |
│   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Main.js
│   │   │   ├── Menu.js
│   │   │   ├── Orders.js
│   │   │   └── Profile.js
│   │   ├── utils
│   │   │   ├── fetchLocalStorageData.js
│   │   │   ├── firebaseFunctions.js
│   │   │   └── styles.js
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── .gitattributes
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
└── server
    ├── functions
    │   ├── routes
    │   │   ├── products.js
    │   │   └── user.js
    │   ├── .env
    │   ├── .eslintrc.js
    │   ├── .gitignore
    │   ├── index.js
    │   ├── package-lock.json
    │   └── package.json
    ├── .firebaserc
    ├── .gitignore
    └── firebase.json
```

Această structură asigură o separare clară între partea de client și partea de server a aplicației, precum și o organizare sistematică a codului sursă, care facilitează dezvoltarea și întreținerea aplicației.
