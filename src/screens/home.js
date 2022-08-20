import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, StatusBar, Image, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Inter from '../components/inter';
import Posts from '../components/posts';
import Header from '../components/header';

const Home = ({route}) => {
  const navigation = useNavigation(); 
  
  return(
      <SafeAreaView style={styles.home}>
        <StatusBar style="translucent"/>
        <Header/>
        <FlatList
            data={Posts}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => 
            <SafeAreaView style={styles.postContainer}>

            <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Profile', item)}>
              <Image source={item.iconImage} style={styles.iconImage}/>
            </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Details', item, item.accountName, item.accountUser, item.body, item.iconImage)} style={{flexDirection: 'column', flexGrow: 1, flex: 1, marginTop: 10,}}>
                  <View style={{flexDirection: 'row', width: '100%', height: 25}}>
                    <Text style={styles.name}>{item.accountName}</Text>
                    <Text style={styles.user}>{item.accountUser}</Text>
                  </View>

                    <Text style={styles.body}>{item.body}</Text>

                  <Inter/>    
                </TouchableOpacity>
                </SafeAreaView>  
            }/>


        <TouchableOpacity style={styles.newtweetbtn}
        onPress={() => navigation.navigate("TweetPage")}>
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>

      </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    home: {
      backgroundColor: '#474747',  
      flexDirection: 'column',
      paddingBottom: 50,
    },
    postContainer: {
      backgroundColor: 'black',
      width: '100%',
      height: 120,
      marginBottom: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  iconBtn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: 30,
      marginTop: 10,
      marginLeft: 10,
  },
  iconImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      marginStart: 10,
  },
  user: {
    fontSize: 14,
    color: 'gray',
    marginStart: 5,
    marginTop: 5,
  },
  body: {
      color: 'white',
      fontSize: 16,
      width: '80%',
      marginStart: 10,
      paddingBottom: '3%',
  },
  newtweetbtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 350,
    marginTop: 650,
},
});

export default Home