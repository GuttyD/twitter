import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TweetPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> Voltar </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});

export default TweetPage

