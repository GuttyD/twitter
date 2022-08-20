import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Details({route}) {
    const { accountName, accountUser, body, iconImage } = route.params;

 return (
   <View>
    <Text> {accountName} </Text>
    <Text> {accountUser} </Text>
    <Text> {body} </Text>
    <Image source={iconImage}/>
   </View>
  );
}