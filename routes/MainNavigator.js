import React, { useContext } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UsuarioContext } from '../contexts/UsuarioContext';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import NovaCaronaScreen from '../screens/NovaCarona';
import UpdateDeleteScreen from '../screens/UpdateDelete';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [logado] = useContext(UsuarioContext);
  return (
    <>
      {!logado ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Cadastre-se" component={RegisterScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NovaCarona" component={NovaCaronaScreen} />
          <Stack.Screen name="UpdateDelete" component={UpdateDeleteScreen} />
        </Stack.Navigator>
      )}
    </>
  );
}