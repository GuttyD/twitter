import React from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Search = () => {
 return (
   
   <SafeAreaView style={styles.search}>
    
    <View style={styles.header}>
      <TouchableOpacity style={{marginStart: 10,}}>
        <Ionicons name="person-circle-outline" size={40} color="gray"/>
      </TouchableOpacity>

      <View style={styles.inputContainer}>  
        <MaterialIcons style={styles.lupa} name="search" size={18} color="#71767b"/>
          <TextInput placeholder="Buscar do Twitter" placeholderTextColor={"#5e6368"} style={styles.input}>
          </TextInput>
      </View>

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
      backgroundColor: '#202327',
      color: 'white',
      fontSize: 16,
      marginLeft: 20,
    },
    inputContainer: {
      width: '65%',
      height: 30,
      borderRadius: 15,
      backgroundColor: '#202327',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lupa: {
      marginLeft: 20,
    },
});

export default Search;
