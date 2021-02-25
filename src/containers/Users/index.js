import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Users = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Profile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa500',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Users;