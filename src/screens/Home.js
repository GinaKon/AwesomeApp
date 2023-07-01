import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyButton from '../components/MyButton';
import { useSelector } from 'react-redux';
import LogoutButton from '../components/LogoutButton';

const colorPalette = {
  tea_rose_red: '#eac8caff',
  pale_purple: '#f2d5f8ff',
  pink_lavender: '#e6c0e9ff',
  lilac: '#bfabcbff',
  cool_gray: '#8d89a6ff'
  };


export default function HomePage({ navigation }) {
  let username = useSelector(s => s.username);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <MyButton title='Click me to change title' color="#eac8caff"></MyButton>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.textStyle}>Click here to go to the about page</Text>
      </TouchableOpacity>
      <LogoutButton title='Click me to logout' color='#8d89a6ff'></LogoutButton>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
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
    backgroundColor: '#eac8caff',
    margin: 10,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#8d89a6ff',
  },
});









