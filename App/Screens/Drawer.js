import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
//import AppNavigatior from '../navigation/AppNavigator';
import { EvilIcons } from '@expo/vector-icons';
import color from '../misc/color';
import AppNavigatior from '../navigation/AppNavigator';
import About from './About';
import AudioList from './AudioList';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigation = ({ navigation }) => ( 
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#352773'
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold'
        }

    }} >
        <HomeStack.Screen name='Music-Player' component={AppNavigatior} options={{
            title:'Music-Player',
            headerLeft: () => ( 
                <EvilIcons name="navicon" size={24} color="white" onPress={() => navigation.openDrawer()} />
            )
        }}
         />
    </HomeStack.Navigator> 
);

const DrawerNavigation = () => { 
   return (
        <Drawer.Navigator initialRouteName='home'>
            <Drawer.Screen name="home" component={AppNavigatior} />
       </Drawer.Navigator>
   )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.APP_BG,
       paddingTop: StatusBar.currentHeight
    }
})

export default DrawerNavigation;
