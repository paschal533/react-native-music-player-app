import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import DrawerNavigation from './App/Screens/Drawer';
import AudioProvider from './App/Context/AudioProvider';
import color from './App/misc/color';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.APP_BG,
  }
}

const App = () => {
  return (
    <AudioProvider>
      <NavigationContainer theme={MyTheme}>
        <DrawerNavigation />
      </NavigationContainer>
    </AudioProvider>)
}
 
export default App;
