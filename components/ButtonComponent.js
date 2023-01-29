import React from 'react';
import { StyleSheet, Text, View, TouchableO, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ onPressHandler, style, children }) => {
    return (
        <TouchableOpacity
            onPress={onPressHandler}
            activeOpacity={0.8}
        >
            <View style={{...styles.btn, ...style}}>
                <Text style={styles.btnText}>{ children }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'gray',
        padding: 9,
        borderRadius: 6
    },
    btnText: {
        color: "white",
        textAlign: 'center',
        fontSize: 17
    }
});

export default ButtonComponent