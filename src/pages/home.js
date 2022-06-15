import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Posts = [
  {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 2,
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 3,
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 4,
      title: 'Post 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 5,
      title: 'Post 5',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 6,
      title: 'Post 6',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 7,
      title: 'Post 7',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 8,
      title: 'Post 8',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  ]

export function Home() {
  return(
    <SafeAreaView style={styles.home}>
      
      <SafeAreaView style={styles.header}> 
        
        <TouchableOpacity style={{marginStart: 10}}>
          <Ionicons name="person-circle-outline" size={40} color="white"/>
        </TouchableOpacity>
        
        <AntDesign name="twitter" size={32} color="#1DA1F2"/>

        <TouchableOpacity style={{marginEnd: 10}}>
          <MaterialCommunityIcons name="star-shooting-outline" size={24} color="white"/>
        </TouchableOpacity>

      </SafeAreaView>
        
        <FlatList
            data={Posts}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => 
            <SafeAreaView style={styles.postContainer}>
              
              <View style={styles.icon}>
                <Ionicons name="person-circle-outline" size={50} color="gray"/>
              </View>
                
                <View style={{flexDirection: 'column', justifyContent:'space-around'}}>
                  <Text style={styles.body}>{item.body}</Text>
                
                <View style={styles.inter}>
                  
                 <TouchableOpacity style={styles.comment}>
                    <Ionicons name="chatbubble-outline" size={20} color="gray" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.retweet}>
                    <AntDesign name="retweet" size={20} color="gray" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.like}>
                    < AntDesign name="hearto" size={20} color="gray"/>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Entypo name="share-alternative" size={20} color="gray" />
                  </TouchableOpacity>
                
                </View>
              </View>
              
            </SafeAreaView>
            }
        />
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: 'blue',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: 'black',
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
    },
    postContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: 130,
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        color: 'white',
        fontSize: 20,
        padding: 10,
        marginRight: 20,
    },
    inter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 50,
        marginLeft: 10,
    },
    like: {
    },
    comment: {

    },
    retweet: {

    },
});