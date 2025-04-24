import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Cart from './components/Cart.js';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <Cart name="Apple" price="1.99" />
      <Cart name="Orange" price="2.49" />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cart: {
    width: 300,
    margin: 10,
    backgroundColor: '#c4eef5',
    padding: 10,
    borderRadius: 10,
  },
  name: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  price: {
    margin: 10,
    fontSize: 16,
  },
  add: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 10,
    color: '#bab0af',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
