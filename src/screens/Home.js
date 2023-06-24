import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <Button title='Click to go to the about page' color="#ffdd80" onPress={() => navigation.navigate('AboutUs')}></Button>
      {/* <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.textStyle}>Click here to go to the about page</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: 'black',
  },
});









