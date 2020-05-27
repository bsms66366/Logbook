// IN ORDER TO USE THIS, YOU NEED TWO THINGS
// 1. Your firebase config, to be replaced on line 12
// 2. Your Doorman public project ID, to be replaced on line 27. (Go to https://app.doorman.cool to find it.)

import * as React from 'react';
import { DoormanProvider, AuthGate } from 'react-native-doorman'
//import FirebaseConfig from "app/FirebaseConfig";

//import AuthStack from '../Stack' // <-- made in step #2 😇

// initialize firebase
import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
      apiKey: "AIzaSyBEQMLljlH7XibdTCWnlWKnTOVAp4VI8Uk",
      authDomain: "logbook-ae991.firebaseapp.com",
      databaseURL:
        "https://logbook-ae991.firebaseio.com/registrations/ZzG2RkcXoNilpp1SwhEv",
      projectId: "logbook-ae991",
      storageBucket: "gs://logbook-ae991.appspot.com",
      messagingSenderId: "962584022257",
      appId: "1:962584022257:web:ad3da6458be42b631d6d50",
      measurementId: "229774498",
    };

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig)
}
// create our App component, shown once we've authed
const AuthedApp = () => ( 
  <Text 
     onPress={() => firebase.auth().signOut()} 
     style={{ paddingTop: 300, color: 'blue', fontSize: 24 }}
   >
     This app is authed!!
   </Text>
)
const App = () => {
  return (
    <NavigationContainer>
      <DoormanProvider publicProjectId="RgpRHCNsXLyXjzphTec4">
        <AuthGate>
          {({ user, loading }) => {
            if (loading) return <></>
           
            // if a user is authenticated
            if (user) return <AuthedApp />
            
            // otherwise, send them to the auth flow
            return <AuthStack />
          }}
        </AuthGate>
      </DoormanProvider>
    </NavigationContainer>
  );
}

export default App