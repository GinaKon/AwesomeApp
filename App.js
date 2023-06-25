import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './src/screens/Home';
import AboutUs from './src/screens/Aboutus';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name ="Screen3" component={Screen3}/>
        <Stack.Screen name = "Screen4" component = {Screen4}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


