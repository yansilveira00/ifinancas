import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

import { 
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_400Regular 
} from '@expo-google-fonts/roboto';

import { Home } from './src/screens/Home';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (! fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
    <StatusBar style="auto" />
      <Home />
    </ThemeProvider>
  );
}

