import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/colors'
import TitleText from './TitleText'

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <TitleText style={styles.logo}>My Shopping List</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 30,
        paddingTop: 25,
        paddingBottom: 15
    },
    logo: {
        color: Colors.white,
        fontSize: 30,
        fontFamily: 'BangersRegular'
    }
})

export default Header
