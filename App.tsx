import "./global.css"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3b82f6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}