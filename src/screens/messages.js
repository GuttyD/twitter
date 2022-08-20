import React from 'react';
import { View, StyleSheet } from 'react-native';

const Messages = () => {
 return (
   <View style={styles.mensagens} />
  );
}

const styles = StyleSheet.create({
    mensagens: {
        flex: 1,
        backgroundColor: 'yellow',
    },
});

export default Messages