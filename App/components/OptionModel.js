import React from "react";
import { View, StyleSheet, StatusBar, Modal, Text, TouchableWithoutFeedback, onPlayPress, onPlaylistPress } from "react-native";
import color from "../misc/color";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const OptionModel = ({ visible, onClose, currentItem, onPlayPress, onPlaylistPress }) => {
    const {filename} = currentItem;
    return <>
            {/*<StatusBar hidden />*/}
            <Modal animationType='slide' transparent={true} visible={visible}>
                <View style={styles.modal}>
                    <Text style={styles.title} numberOfLines={2}>{filename}</Text>
                    <View style={styles.OptionContainer}>
                        <TouchableWithoutFeedback onPress={onPlayPress}> 
                            <Text style={styles.option}><AntDesign name="play" size={22} color="black" style={{ margin: 10, top: 4}}/>Play</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={onPlaylistPress}> 
                            <Text style={styles.option}><MaterialIcons name="library-music" size={22} color='black' style={{ margin: 10, top: -5}}/>Add to Playlist</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.ModalBg}/>
                </TouchableWithoutFeedback>
            </Modal>
        </>
}

const styles = StyleSheet.create({
    modal:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: color.APP_BG,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1000,
        },
    OptionContainer: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0,
        color: color.FONT_MEDIUM,
    } ,
    option: {
        fontSize: 15,
        fontWeight: 'bold',
        color: color.FONT,
        paddingVertical: 10,
        letterSpacing: 1,
    },
    ModalBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: color.MODAL_BG,
    }
})

export default OptionModel;