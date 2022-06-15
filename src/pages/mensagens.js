import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Mensagens() {
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