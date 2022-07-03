import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Feather, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

const TweetPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{alignSelf: 'center', marginStart: 10}} onPress={() => navigation.goBack()}>
                    <Feather name="x" size={30} color="white" />
                </TouchableOpacity>

                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', marginRight: 10}}>
                <TouchableOpacity>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1DA1F2'}}> Drafts </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tweetBtn}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}> Tweet </Text>
                </TouchableOpacity>
                </View>


            </View>

                <View style={styles.tweetContainer}>
                    <EvilIcons style={styles.icon} name="user" size={60} color="white" />
                    <TextInput
                    style={styles.input}
                    placeholder="What's happening?"
                    placeholderTextColor={"gray"}
                    multiline={true}
                    numberOfLines={3}
                    autoFocus={true}
                    />
                </View>

                <ScrollView
                style={{marginTop: 10, flex: 1}}
                horizontal
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'gray'}}>
                        <Ionicons name="camera-outline" size={32} color="#1DA1F2" />
                    </View>

                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>
                    <View style={{width: 100, height: 100, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 5}}/>

                </ScrollView>

                <View style={{width: '100%', height: 50, borderWidth: 0.5, borderColor: 'gray', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <Feather name="image" size={24} color="#1DA1F2" />
                        <MaterialIcons name="gif" size={24} color="#1DA1F2" />
                        <Ionicons name="stats-chart" size={24} color="#1DA1F2" />
                        <Ionicons name="location-outline" size={24} color="#1DA1F2" />
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    tweetBtn: {
        width: 100,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tweetContainer: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginStart: 10,
        
    },
    input: {
        width: '100%',
        height: 200,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        marginStart: 10,
    },
});

export default TweetPage

