import React from 'react';
import { View, StyleSheet } from 'react-native';

const Notification = () => {
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

export default Notification