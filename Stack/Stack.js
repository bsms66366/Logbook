import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthFlow } from 'react-native-doorman'

const Phone = () => {
  const { navigate } = useNavigation()

  return (
    <AuthFlow.PhoneScreen 
      onSmsSuccessfullySent={() => {
        navigate('Confirm')
      }}
      renderHeader={null}
    />
  )
}

const Confirm = () => (
  <AuthFlow.ConfirmScreen 
    renderHeader={null}
  />
)

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Phone" component={Phone} />
    <Stack.Screen name="Confirm" component={Confirm} />
  </Stack.Navigator>
)

export default AuthStack