import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
    return (
    <SafeAreaView style={styles.header}> 
            
        <TouchableOpacity style={{marginStart: 10}}>
            <Ionicons name="person-circle-outline" size={40} color="white"/>
        </TouchableOpacity>
            
        <AntDesign name="twitter" size={32} color="#1DA1F2"/>

        <TouchableOpacity style={{marginEnd: 15}}>
            <MaterialCommunityIcons name="star-shooting-outline" size={24} color="white"/>
        </TouchableOpacity>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'black',
            height: 50,
            marginBottom: 1,
        },
    });

export default Header;