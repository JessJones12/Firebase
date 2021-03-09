import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { firebase } from '@firebase/app';

 

class  Google extends Component {
  
  onSubmit = () =>{
    // Using a redirect.
    firebase.auth().getRedirectResult().then(function(result) {
      // Start a sign in process for an unauthenticated user.
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      });
    });
    
    function isUserEqual(googleUser, firebaseUser) {
      if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
          if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.getBasicProfile().getId()) {
            // We don't need to reauth the Firebase connection.
            return true;
          }
        }
      }
      return false;
    }
}




    render() { 
        return ( 
<div> 
      <Button type= "button" clasName = "btn btn-primary text-white w-100"
            onClick= {this.onSubmit}> Sign In With Google</Button>

</div>
         );
    }
}
 
export default Google ;