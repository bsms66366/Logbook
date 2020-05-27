import React from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { DoormanProvider, AuthFlow, AuthGate } from 'react-native-doorman'
  
import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig)
}
    
const AuthenticatedApp = () => (
 <Text 
   onPress={() => firebase.auth().signOut()} 
   style={{ paddingTop: 300, color: 'blue', fontSize: 24 }}
 >
   This app has working phone auth 🤯
 </Text>
)

function App() {
  return (
    <DoormanProvider publicProjectId="RgpRHCNsXLyXjzphTec4">
      <AuthGate>
        {({ user, loading }) => {
          if (loading) return <ActivityIndicator />
         
          // if a user is authenticated
          if (user) return <AuthenticatedApp />
          
          // otherwise, send them to the auth flow
          return <AuthFlow />
        }}
      </AuthGate>
    </DoormanProvider>
  )
}


export default App
