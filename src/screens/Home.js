import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const colorPalette = {
  tea_rose_red: '#eac8caff',
  pale_purple: '#f2d5f8ff',
  pink_lavender: '#e6c0e9ff',
  lilac: '#bfabcbff',
  cool_gray: '#8d89a6ff'
  };


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <Button title='Click to go to the about page' color={colorPalette} onPress={() => navigation.navigate('AboutUs')}></Button>
      {/* <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.textStyle}>Click here to go to the about page</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#e6c0e9ff',
    margin: 20,
    color:'grey'
  },
  container: {
    flex: 1,
    backgroundColor: '#bfabcbff',
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
    backgroundColor: '#ffdd80',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#eac8caff',
  },
});









