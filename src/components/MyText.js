import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function MyText({content}) {
  return (
    <Text style={styles.text}>{'Magic!'}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 50,
  }
});





