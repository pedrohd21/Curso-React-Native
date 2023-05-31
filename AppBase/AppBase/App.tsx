// import { Groups } from '@screens/Groups';
// import { NewGroup } from '@screens/NewGroup';
// import { Players } from '@screens/Players';

import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header';


export default function App() {
  const [fontsLoaded]= useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Loading/> : <Loading/>}
    </ThemeProvider>
  );
}
