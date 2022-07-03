import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const QuoteTweet = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> Cancelar </Text>
            </TouchableOpacity>
        </View>
    )
}

export default QuoteTweet