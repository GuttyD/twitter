import React from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function Search() {
 return (
   <SafeAreaView style={styles.search}>
    <View style={styles.header}>
      <TouchableOpacity style={{marginStart: 10,}}>
        <Ionicons name="person-circle-outline" size={40} color="gray"/>
      </TouchableOpacity>

      <TextInput placeholder="Buscar do Twitter" placeholderTextColor={'#2f3238'} style={styles.input}>
        <MaterialIcons name="search" size={16}/>
      </TextInput>

      <TouchableOpacity style={{marginEnd: 10,}}>
        <AntDesign name="setting" size={24} color="white" />
      </TouchableOpacity>

    </View>
   </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    search: {
      flex: 1,
      backgroundColor: 'red',
    },
    header: {
      width: '100%',
      height: 50,
      backgroundColor: 'black',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    input: {
      width: '70%',
      height: 30,
      borderRadius: 15,
      backgroundColor: '#292d33',
      paddingHorizontal: 10,
      fontSize: 16,
    },
});
