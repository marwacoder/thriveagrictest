/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {extendTheme, NativeBaseProvider} from 'native-base'

import Organisation from './screens/org';
import Repository from './screens/repo';
import Home from './screens/dashboard';



const App = () => {
 const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      //initialColorMode: 'dark',
    },
  });

  
const Stack = createNativeStackNavigator();


  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'
    screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>

      {/* <Stack.Screen name="Organisation" component={Organisation} />
      <Stack.Screen name="Repository" component={Repository} /> */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
    
    </NativeBaseProvider>
  );
};



export default App;
