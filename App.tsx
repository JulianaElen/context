import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider from './src/context/AutenticationContext';

const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

import Tela1 from './src/screen/Tela1';
import Tela2 from './src/screen/Tela2';
import Tela3 from './src/screen/Tela3';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name='Inicio' component={Tela1} />
          <Stack.Screen name='Segunda' component={Tela2} />
          <Stack.Screen name='Terceira' component={Tela3} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}