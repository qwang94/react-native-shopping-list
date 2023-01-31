import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const InputComponent = (props) => {
    return (
        <TextInput 
            {...props}
            style={{...styles.input, ...props.style}}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.secondary,
        borderWidth: 1,
        height: 40,
        marginVertical: 5
    }
})

export default InputComponent
