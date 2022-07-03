import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import RetweetBtn from './retweetbtn';

const Inter = () => {
    const [liked, setLiked] = useState(false);
    
    return(

    <View style={styles.inter}>

        <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={20} color="gray" />
        </TouchableOpacity>
                
        <RetweetBtn/>
                  
        <TouchableOpacity onPress ={() => setLiked(!liked)}>
            { liked && <Ionicons name="heart"size={20} color="red" /> }
            { !liked && <Ionicons name="heart-outline"size={20} color="gray" /> }
        </TouchableOpacity>

        <TouchableOpacity>
            <Feather name="share-2" size={20} color="gray" />
        </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({
    inter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 50,
        marginStart: -20,
    },
});

export default Inter;