import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase';

var firebaseConfig = {
      apiKey: "AIzaSyBEQMLljlH7XibdTCWnlWKnTOVAp4VI8Uk",
      authDomain: "logbook-ae991.firebaseapp.com",
      databaseURL:"https://logbook-ae991.firebaseio.com/registrations/ZzG2RkcXoNilpp1SwhEv",
      projectId: "logbook-ae991",
      storageBucket: "gs://logbook-ae991.appspot.com",
      messagingSenderId: "962584022257",
      appId: "1:962584022257:web:ad3da6458be42b631d6d50",
      measurementId: "229774498",
    };


// Ensure that you do not login twice.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function storeHighScore(userId, score) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      highscore: score,
    });
}

function setupHighscoreListener(userId) {
  firebase
    .database()
    .ref('users/' + userId)
    .on('value', snapshot => {
      const highscore = snapshot.val().highscore;
      console.log('New high score: ' + highscore);
    });
}

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log('We are authenticated now!');
  } else {
    console.log('We did not authenticate.');
  }

  // Do other thing
});

export default class App extends Component {
  _handleGoogleLogin = async () => {
    try {
      const { type, user, idToken, accessToken } = await Google.logInAsync({
        androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId:
          '127801932624-lehn4qea1ljhhk8dg5uogmm9q9kts6kv.apps.googleusercontent.com',
        iosClientId:
          '127801932624-8gbfgf0ocq1fvf95glehh60lmuicahbj.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      switch (type) {
        case 'success': {
          Alert.alert('Logged in!', `Bem vindo ${user.name}!`);
          console.log(user);
          console.log(type);
          console.log(idToken);
          console.log(accessToken);

          const credential = new firebase.auth.GoogleAuthProvider.credential(
            idToken,
            accessToken
          );

          firebase
            .auth()
            .signInWithCredential(credential)
            .catch(error => {
              // Handle Errors here.
              console.log('Error authenticating with Google');
              console.log(error);
              console.log(error.message);
            });

          break;
        }
        case 'cancel': {
          Alert.alert('Cancelled!', 'Login was cancelled!');
          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Login failed!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login with Google" onPress={this._handleGoogleLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
