import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import color from '../misc/color';

const Screen = ({ children }) => { 
   return <View style={styles.container}>
         {children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.APP_BG,
       paddingTop: 10
    }
})

export default Screen;
