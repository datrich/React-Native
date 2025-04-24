// components/Cart.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const Cart = ({ name, price }) => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
    Alert.alert(`${name} added to cart!`);
  };

  return (
    <View style={styles.cart}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Button title="Add to Cart" onPress={onPress} color="#4CAF50" />
      <Text style={styles.add}>Added to cart: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Cart;
