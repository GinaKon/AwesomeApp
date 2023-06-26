import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyText from '../components/MyText';

const colorPalette = {
tea_rose_red: '#eac8caff',
pale_purple: '#f2d5f8ff',
pink_lavender: '#e6c0e9ff',
lilac: '#bfabcbff',
cool_gray: '#8d89a6ff'
};

export default function Screen4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Screen 4</Text>
      <MyText style={styles.textStyle}></MyText>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.goBack()}>
        <Text style={styles.textStyle}>Go back!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey'
  },
  container: {
    flex: 1,
    backgroundColor: '#e6c0e9ff',
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
    color: 'grey',
  },
  button2Style:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ffdd80',
    margin: 10,
  },
});