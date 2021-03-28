import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import color from '../misc/color';

const getThumbnailText = (filename) => filename[0];

const convertTime = minutes => {
    if(minutes){
        const hour = minutes / 60;
        const minute = hour.toString().split('.')[0];
        const percent = parseInt(hour.toString().split('.')[1].slice(0, 2));
        const sec = Math.ceil((60 * percent) / 100);

        if(parseInt(minute) < 10 && sec < 10){
            return `0${minute}:0${sec}`;
        }
        if(parseInt(minute) < 10 ){
            return `0${minute}:${sec}`;
        }
        if(sec < 10){
            return `${minute}:0${sec}`;
        }

        return `${minute}:${sec}`;
    }
}

const AudioListItem = ({ title, duration, onOptionPress }) => { 
    return ( 
        <>
        <View style={styles.container}>
             <View style={styles.leftContainer}>
                 <View style={styles.thumbnail}>
                     <Text style={styles.thumbnailText}>{getThumbnailText(title)}</Text>
                 </View>
                 <View style={styles.titleContainer}>
                     <Text numberOfLines={1} tyle={styles.title}>{title}</Text>
                     <Text numberOfLines={1} tyle={styles.time}>{convertTime(duration)}</Text>
                 </View>
             </View>
             <View style={styles.rightContainer}>
                 <Entypo onPress={onOptionPress} name="dots-three-vertical" size={20} color={color.FONT_MEDIUM} />  
             </View>
        </View>
        <View style={styles.separator}/>
        </>
        )
};

const { width } = Dimensions.get('window')
const styles = StyleSheet({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        with: width - 80,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    rightContainer: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexBasics: 50,
    },
    thumbnail: {
        height: 50,
        flexBasics: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23,
    },
    thumbnailText: {
        fontSize: 23,
        fontWeight: 'bold',
       // color: color.FONT,
    },
    titleContainer: {
        width: width - 180,
        paddingLeft: 10,
    },
    title: {
        fontSize: 15,
       // color: color.FONT,
    },
    separator: {
        width: width - 80,
        backgroundColor: '#333',
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 10,
    },
    time: {
        fontSize: 14,
       // color: color.FONT_LIGHT,
    }
})

export default AudioListItem;

