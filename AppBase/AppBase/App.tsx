import { StatusBar, } from 'react-native';

import { Home } from './src/screens/Home'
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto';
import React from 'react';



export default function App() {
  const [fontsLoaded]= useFonts({Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_100Thin});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle="light-content"
      translucent
      />
      {fontsLoaded ? 
        <Home/>
      : <Loading/>}
    </ThemeProvider>  
  );
}
