import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Modal, StyleSheet, Alert } from 'react-native';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

//<TouchableOpacity onPress={() => setRetweet(!retweet)}>
//{ retweet && <AntDesign name="retweet"size={20} color="green" /> }
//{ !retweet && <AntDesign name="retweet"size={20} color="gray" /> }
//</TouchableOpacity>

const RetweetBtn = () => {
    const navigation = useNavigation(); 

    const [modalVisible, setModalVisible] = useState(false);
    const [color, setColor] = useState("gray");
    const [normalRetweet, setNormalRetweet] = useState(false)
    const normalRetweetHandler = () => {
        setNormalRetweet(true)
        setColor("#0b9616")
        setModalVisible(false)
    }

    return (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AntDesign name="retweet" size={20} color={color} />
            <GestureRecognizer
            style={{flex: 1}}
            onSwipeDown={ () => setModalVisible(false) }
            >
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.modalcontainer}>

            <View style={{width: 30, height: 5, borderRadius: 20, backgroundColor: '#474747', marginTop: 10, alignSelf: 'center' }}/>


        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20, alignItems: 'center'}}>

            <TouchableOpacity onPress={normalRetweetHandler}>
                <AntDesign name="retweet" size={30} color="gray"/>
            </TouchableOpacity>
            <Text style={styles.text}> Retweet </Text>

        </View>

        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('QuoteTweet')}>
                <Octicons name="pencil" size={30} color="gray" />
            </TouchableOpacity>
            <Text style={styles.text}> Quote Tweet </Text>
        </View>

        </View>
        </Modal>
        </GestureRecognizer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalcontainer: {
        width: '100%',
        height: 150,
        backgroundColor: 'black',
        marginTop: 620,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginLeft: 5,
    },
})

export default RetweetBtn