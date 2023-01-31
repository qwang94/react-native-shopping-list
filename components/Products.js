import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Products = ({name, deleteProduct, idString}) => {
    return (
        <Pressable
            onPress={() =>  deleteProduct(idString)}
        >
            <View style={styles.items}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    items: {
        marginTop: 10,
        backgroundColor: 'red',
        borderRadius: 15
    },
    element: {
        color: '#fff',
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    }
});

export default Products;
