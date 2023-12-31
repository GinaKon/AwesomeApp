import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const colorPalette = {
  tea_rose_red: '#eac8caff',
  pale_purple: '#f2d5f8ff',
  pink_lavender: '#e6c0e9ff',
  lilac: '#bfabcbff',
  cool_gray: '#8d89a6ff'
  };

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Screen 3</Text>
      <Text style={styles.textStyle}>Here you can see an image</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Screen4')}>
        <Text style={styles.textStyle}>Go to screen 4!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2Style} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'grey'
  },
  container: {
    flex: 1,
    backgroundColor: '#eac8caff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#eac8caff',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
  },
  button2Style:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#eac8caff',
    margin: 10,
  },
});