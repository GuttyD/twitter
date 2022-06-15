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
      accountName: 'John Doe',
      accountUser: '@johndoe', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elita.',
  },
  {
      id: 2,
      title: 'Post 2',
      accountName: 'John Doe',
      accountUser: '@johndoe', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 3,
      title: 'Post 3',
      accountName: 'John Doe',
      accountUser: '@johndoe', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 4,
      title: 'Post 4',
      accountName: 'John Doe',
      accountUser: '@johndoe', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 5,
      title: 'Post 5',
      accountName: 'John Doe',
      accountUser: '@johndoe', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 6,
      title: 'Post 6',
      accountName: 'John Doe',
      accountUser: '@johndoe', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 7,
      title: 'Post 7',
      accountName: 'John Doe',
      accountUser: '@johndoe', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
      id: 8,
      title: 'Post 8',
      accountName: 'John Doe',
      accountUser: '@johndoe', 
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

                <View style={{flexDirection: 'column', flexGrow: 1, flex: 1}}>
                  <View style={{flexDirection: 'row', width: '40%', height: 25}}>
                  <Text style={styles.name}>{item.accountName}</Text>
                  <Text style={styles.user}>{item.accountUser}</Text>
                  </View>
                <Text style={styles.body}>{item.body}</Text>
                <View style={styles.inter}>
                  
                 <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={20} color="gray" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <AntDesign name="retweet" size={20} color="gray" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
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
      backgroundColor: '#474747',  
      flexDirection: 'column',
    },
    header: {
        backgroundColor: 'black',
        width: '100%',
        height: '8%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 1,
        flexDirection: 'row',
    },
    postContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: 130,
        marginBottom: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: '12%',
        height: '40%',
        borderRadius: 25,
        backgroundColor: 'white',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginStart: 10,
    },
    user: {
      fontSize: 15,
      color: 'gray',
      marginStart: 10,
      marginTop: 4,
    },
    body: {
        color: 'white',
        fontSize: 20,
        width: '80%',
        marginStart: 10,
    },
    inter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 50,
        marginStart: -20,
        marginTop: 15,
    },
});