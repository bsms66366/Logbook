import ReactNativeBiometrics from 'react-native-biometrics'
 
let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
let payload = epochTimeSeconds + 'some message'
 
ReactNativeBiometrics.createSignature({
    promptMessage: 'Sign in',
    payload: payload
  })
  .then((resultObject) => {
    const { success, signature } = resultObject
 
    if (success) {
      console.log(signature)
      verifySignatureWithServer(signature, payload)
    }
  })