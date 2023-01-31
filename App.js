import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, View, FlatList, Modal, Text, Pressable, ImageBackground } from 'react-native';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

import AddProduct from './components/AddProduct';
import Products from './components/Products';
import DismissKeyboard from './components/DismissKeyboard';
import ButtonComponent from './components/ButtonComponent';
import Header from './components/Header';
import Colors from './constants/colors';

export default function App() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);

    const [fontsLoaded, error] = useFonts({
        BangersRegular: Bangers_400Regular,
        'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
        'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
        'itim-regular': require('./assets/fonts/Itim-Regular.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }

    const submitHandler = (product) => {
        setDisplayModal(false);
        if (product.length > 1) {
            const idString = Date.now().toString();
            setProducts(currentProducts => [{ key: idString, name: product}, ...currentProducts]);
        } else {
            setShowModal(true);
        }
    }

    const deleteProduct = (key) => {
        setProducts( currentProducts => {
            return currentProducts.filter( product => product.key != key)
        })
    }

    return (
        <DismissKeyboard>
            <ImageBackground 
                style={styles.bgImage}
                source={{uri: 'https://cdn.pixabay.com/photo/2017/11/07/20/43/christmas-tree-2928142_960_720.jpg'}}
            >
                <Header />
                <View style={styles.container}>
                    <Modal
                        visible={showModal}
                        onRequestClose={() => setShowModal(false)}
                        animationType='slide'
                        transparent
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalHeaderText}>Oops</Text>
                                </View>
                                <View style={styles.modalBody}>
                                    <Image source={{uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/32/forbidden-159816__340.png'}} style={styles.image128}/>
                                    <Text style={styles.modalBodyText}>Merci de bien vouloir indiquer plus d'un caractère</Text>
                                </View>
                                <View style={styles.modalFooter}>
                                    <Pressable style={styles.modalPressable} onPress={() => setShowModal(false)}>
                                        <Text style={styles.modalBtn}>Ok</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
        
                    <ButtonComponent onPressHandler={() => setDisplayModal(true)} style={styles.addProductBtn}> Nouveau Produit </ButtonComponent>
            
                    <AddProduct submitHandler={submitHandler} displayModal={displayModal} cancelModal={() => setDisplayModal(false)}/>
                    
                    <FlatList 
                        data={products}
                        renderItem={({ item  }) => (
                            <Products 
                                name={item.name}
                                deleteProduct={deleteProduct}
                                idString={item.key}
                            />
                        )}
                    />
                </View>

            </ImageBackground>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary
  },
  modalContent: {
    backgroundColor: Colors.white,
    width: '90%',
    height: 300,
    borderRadius: 15,
    alignItems: 'center'
  },
  modalHeader: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 17
  },
  modalBody: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBodyText: {
    fontSize: 17
  },
  modalFooter: {
    width: '100%',
  },
  modalPressable: {
    backgroundColor: 'lightseagreen',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    padding: 16
  },
  image128: {
    width: 100,
    height: 100
  },
  addProductBtn: {
    backgroundColor: "#e15",
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 20
  },
  bgImage: {
    flex: 1
  }
});
