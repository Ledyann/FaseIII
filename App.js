import * as firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UsuarioProvider } from './contexts/UsuarioContext';

import MainNavigator from './routes/MainNavigator';
import SplashScreen from './screens/Splash';

const firebaseConfig = {
  apiKey: "AIzaSyDF_Npe6uynQV6Kzh0xflVGn6ZeGJu75xg",
  authDomain: "pimobile-c5d6a.firebaseapp.com",
  projectId: "pimobile-c5d6a",
  storageBucket: "pimobile-c5d6a.appspot.com",
  messagingSenderId: "885929482052",
  appId: "1:885929482052:web:a1e38e65977ff673942911",
  measurementId: "G-M1RP6R9BRF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 1500);
  }, []);

  return (
    <UsuarioProvider>
      <NavigationContainer>
        {exibeSplash ? <SplashScreen /> : <MainNavigator />}
      </NavigationContainer>
    </UsuarioProvider>
  );
}
