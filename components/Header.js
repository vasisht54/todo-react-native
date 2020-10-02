import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.title}>
        Todo List
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral'
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  }

});

export default Header;