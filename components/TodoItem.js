import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress = {() => pressHandler(item.id)}>
      <Text style = {styles.item}>{item.content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'solid'
  }
});