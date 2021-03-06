import firebase from "firebase/app";
import firebaseApp from "./firebase";
import "firebase/auth";

class AuthService {
  socialLogin(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout(){
    firebaseApp.auth().signOut();
  }

  onAuthChange(onUserChanged){
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }
}

export default AuthService;