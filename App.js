import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserList from './screens/UserList';
import UserDetails from './screens/UserDetails';

const Stack = createStackNavigator();

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('jwtToken');
      setIsLoggedIn(!!token);
    };
    checkToken();
  }, []);

 return (
  <NavigationContainer>
   <Stack.Navigator initialRouteName='Login'>
       <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="UserList" component={UserList} options={{ title: 'User List' }} />
      <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: 'User Details' }} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App;