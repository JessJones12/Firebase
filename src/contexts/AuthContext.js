import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'


const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children}) {
 const [currentUser, setCurrentUser] = useState()
 const  [loading, setLoading] = useState(true)

 //this allows you to use firebase. If you wanted it to go to server instead change this and the login function below. 
 function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
 }

 function login(email, password) {
     return auth.signInWithEmailAndPassword(email, password)
 }

 function logout() {
     return auth.signOut()
 }

 function resetPassword(email){
     return auth.sendPasswordResetEmail(email)
 }

 function updateEmail(email) {
    return auth.currentUser.updateEmail(email)
 }

 function updatePassword(password) {
    return auth.currentUser.updatePassWord(password)
 }

//firebase uses tokens for you 
 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false) 
     })

    return unsubscribe 
 }, [])

    const value = {
        currentUser,
        signup, 
        login, 
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider  value={value}> 
            {!loading && children}
        </AuthContext.Provider> 
    )
}
