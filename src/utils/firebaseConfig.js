import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDB8pQyRobR8YdY6sNRlj26dGCGRI43ZK0",
    authDomain: "xymview.firebaseapp.com",
    projectId: "xymview",
    storageBucket: "xymview.appspot.com",
    messagingSenderId: "839907862738",
    appId: "1:839907862738:web:6fe95e631769e3f30ce50b"
})

export const auth = app.auth()
export default app;