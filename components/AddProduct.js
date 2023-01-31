import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import BodyText from './BodyText';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';
import AppStyles from '../constants/AppStyles';
import TitleText from './TitleText';

const AddProduct = ({submitHandler, displayModal, cancelModal}) => {
    const [product, setProduct] = useState('');

    const inputHandler = (val) => {
        const regex = /[^a-z]/gi;
        setProduct(val.replace(regex, ''));
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    }

    const handleCancel = () => {
        cancelModal();
    }

    return (
        <Modal
            visible={displayModal}
            animationType='slide'
        >
            <View style={styles.inputContainer}>

                <TitleText>Veuillez indiquer un produit</TitleText>
                <BodyText>traverseDependencies (C:\Users\ASUS\Desktop\Projet Perso\Udemy\react native\shopping-list\node_modules\met</BodyText>
                <InputComponent
                    style={styles.textInput}
                    placeholder="Nouveau produit"
                    onChangeText={inputHandler}
                    value={product}
                    maxLength={10}
                />

                <View style={styles.buttonContainer}>
                    <ButtonComponent 
                        onPressHandler={ handleClick }
                        style={styles.btnBlue}
                    > Valider </ButtonComponent>
                    <ButtonComponent 
                        onPressHandler={ handleCancel }
                        style={styles.btnTomato}
                    > Annuler </ButtonComponent>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 24
      },
    textInput: {
        borderColor: '',
        padding: 5,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 9,
        borderRadius: 30,
        height: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnBlue: {
        backgroundColor: 'seagreen',
        width: 150,
        borderRadius: 6
    },
    btnTomato: {
        backgroundColor: 'tomato',
        width: 150,
        borderRadius: 6
    }
});

export default AddProduct
