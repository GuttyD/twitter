import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/home';
import TweetPage from './src/pages/tweetpage';
import Search from './src/pages/search';
import Notification from './src/pages/notification';
import Messages from './src/pages/messages';
import QuoteTweet from './src/pages/quotetweet';
import Profile from './src/pages/profile'

const Stack = createNativeStackNavigator()

const Screen1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="TweetPage" component={TweetPage}/>
        <Stack.Screen name="QuoteTweet" component={QuoteTweet}/>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  )
}
export {Screen1}

const Screen2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      <Stack.Screen name="Search" component={Search}/>
    </Stack.Navigator>
  )
}

export {Screen2}

const Screen3 = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Notification" component={Notification}/>
    </Stack.Navigator>
  )
}

export {Screen3}

const Screen4 = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Messages" component={Messages}/>
    </Stack.Navigator>
  )
}

export {Screen4}