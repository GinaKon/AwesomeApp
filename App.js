import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './src/screens/Home';
import AboutUs from './src/screens/Aboutus';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginScreen from './src/screens/LoginPage';
import RegistrationScreen from './src/screens/Registration';


const Stack = createStackNavigator();

export default function App() {
  const reducer = (state, action) => {
    if (action.type === "changeUsername") {
      return {username: action.payload}
    }
    else {
      return state
    }
  }

  const store = createStore(reducer, {username: 'No user is set yet'})
  return (
    <Provider store={store}>
      <NavigationContainer>
       <Stack.Navigator initialRouteName='LoginPage'>
        <Stack.Screen name="LoginPage" component={LoginScreen}/>
        <Stack.Screen name="Registration" component={RegistrationScreen}/>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name ="Screen3" component={Screen3}/>
        <Stack.Screen name = "Screen4" component = {Screen4}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


