import React, {useState} from 'react';
import { Styles,Text, TextInput, TouchableOpacity } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import Constants from 'expo-constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import firebase from 'firebase';
import styles from 'styles';


export default App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);


  // Function to be called when requesting for a verification code
  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };
  
// Function to be called when confirming the verification code that we received
  // from Firebase via SMS
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        console.log(result);
      });
  };
 

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={Constants.manifest.extra.firebase}
        />
        <TextInput
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.sendVerification}
          onPress={sendVerification}
        >
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Confirmation Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};