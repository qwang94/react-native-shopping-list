import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = ({style, children}) => {
    return <Text style={{...styles.text, ...style}}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        padding: 9
    }
})

export default TitleText
