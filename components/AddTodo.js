import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert} from 'react-native';

export default function AddTodo({submitHandler}) {

  const [text, setText] = useState ('');

  const changeHander = (val) => {
    setText(val);
  };

  const buttonPressHandler = () => {
    if (text.trim().length > 0) {
      submitHandler(text);
    }
    else {
      Alert.alert('Alert', 'Enter something to do!', [
        {text: 'Okay'}
      ])
    }
    // setText('');
  }

  return (
    <View>
      <TextInput 
        style = {styles.input}
        placeholder = 'New todo..'
        onChangeText = {changeHander}
      />
      <Button onPress={buttonPressHandler} title = 'Add' color = 'coral'  />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});