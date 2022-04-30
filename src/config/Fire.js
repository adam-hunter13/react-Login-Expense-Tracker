import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC1ig3F3HMQI49IwSEHeQ3aMQkUL6p5wJA",
    authDomain: "react-login-expense-trac-a656c.firebaseapp.com",
    projectId: "react-login-expense-trac-a656c",
    storageBucket: "react-login-expense-trac-a656c.appspot.com",
    messagingSenderId: "672438469735",
    appId: "1:672438469735:web:2c7decf98df58b1c1740c2"
};

const fire = firebase.initializeApp(config);
export default fire;