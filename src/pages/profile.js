import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const Profile = ({route}) => {
    const { item } = route.params;
    const { accountName, accountUser, iconImage } = route.params;

    return (
        <View>
            <Text> {accountName} </Text>
            <Text> {accountUser} </Text>
            <Image source={iconImage}/>
        </View>
    )
}

export default Profile