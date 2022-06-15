import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Notification() {
 return (
   <View style={styles.notification} />
  );
}

const styles = StyleSheet.create({
    notification: {
        flex: 1,
        backgroundColor: 'purple',
    },
});