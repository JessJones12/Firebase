import firebase from 'firebase/app'
import "firebase/auth" 


const app = firebase.initializeApp({
    apiKey: "AIzaSyA_hn_NtR0mI_IwrkSLtXZ7E3vNt2IZLX4",
    authDomain: "auth-development-d7d3f.firebaseapp.com",
    databaseURL: "https://auth-development-d7d3f.firebase.com",
    projectId: "auth-development-d7d3f",
    storageBucket: "auth-development-d7d3f.appspot.com",
    messagingSenderId: "1079998477434",
    appId:"1:1079998477434:web:e3a76108f7d371d674b7c3"
})


export const auth = app.auth()
export default app