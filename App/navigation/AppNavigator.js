import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import AudioList from "../Screens/AudioList";
import Player from "../Screens/Player";
import PlayList from "../Screens/PlayList";
import { createStackNavigator } from '@react-navigation/stack';
import { EvilIcons } from '@expo/vector-icons';



const HomeStack = createStackNavigator();


const Tab = createBottomTabNavigator();

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
        <HomeStack.Screen name='Music-Player' component={AudioList} options={{
            title:'Music-Player',
            headerLeft: () => ( 
                <EvilIcons name="navicon" size={24} color="white" onPress={() => navigation.openDrawer()} />
            )
        }}
         />
    </HomeStack.Navigator> 
);


const AppNavigatior = () => {
    return (
            <Tab.Navigator         tabBarOptions={{
                activeTintColor: '#9c1c55',
                inactiveTintColor: 'gray',
              }}>
                <Tab.Screen name="home" component={HomeStackNavigation} options={{
                    tabBarIcon: ({color, size}) => (<Ionicons name="headset" size={size} color={color} />) 
                }} />
                <Tab.Screen name="Player" component={Player}  options={{
                    tabBarIcon: ({color, size}) => (<FontAwesome5 name="compact-disc" size={size} color={color} />) }} />
                <Tab.Screen name="PlayList" component={PlayList} options={{
                    tabBarIcon: ({color, size}) => (<MaterialIcons name="library-music" size={size} color={color} />) }}  />
            </Tab.Navigator>

    )
}



export default AppNavigatior;