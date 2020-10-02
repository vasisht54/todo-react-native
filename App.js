import React, {useState} from 'react';
import { FlatList, StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {content: 'buy coffee', id: '1'},
    {content: 'eat chocolate', id: '2'},
    {content: 'prepare breakfast' , id: '3'},
  ]);

  const pressHandler = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const submitHandler = (text) => {
    setTodos(prevTodos => {
      return [...prevTodos, {content: text, id: Math.random().toString()}];
    });
    Keyboard.dismiss();
  };


  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
          <AddTodo submitHandler = {submitHandler}/>
          <View style = {styles.list}>
            <FlatList 
              data = {todos}
              renderItem ={ ({item}) => (
                <TodoItem item = {item} pressHandler = {pressHandler} />
              )}
              />
          </View>
        </View>
      
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: 40,
    //paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
