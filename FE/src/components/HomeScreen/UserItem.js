import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../../assets/Theme';

const UserItem = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    height: 115,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    backgroundColor: Theme.colors.primary,
  },
  name: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default UserItem;
