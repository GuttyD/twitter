import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Shop() {
 return (
   <View style={styles.shop} />
  );
}

const styles = StyleSheet.create({
    shop: {
        flex: 1,
        backgroundColor: 'orange',
    },
});