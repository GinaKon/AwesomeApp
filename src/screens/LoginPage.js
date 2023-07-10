import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/actions/userActions';
import MyButton from '../components/MyButton';

const colorPalette = {
  tea_rose_red: '#eac8caff',
  pale_purple: '#f2d5f8ff',
  pink_lavender: '#e6c0e9ff',
  lilac: '#bfabcbff',
  cool_gray: '#8d89a6ff',
};

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      
      setUsername('');
      setPassword('');

      
      const user = {
        username: username,
      };

      dispatch(loginUser(user));

      navigation.navigate('Home');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleRegistration = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={[styles.root, { backgroundColor: colorPalette.lilac }]}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.header}>Welcome to the Mobile App +Masters</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <MyButton title="Login" color={colorPalette.tea_rose_red} onPress={handleLogin} />
      <MyButton title="Sign up" color={colorPalette.tea_rose_red} onPress={handleRegistration} />
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textStyle}>Click here to go to the home page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
    color: '#e6c0e9ff'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: colorPalette.cool_gray,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 150,
  },
  textStyle: {
    color: '#e6c0e9ff',
  },
});



